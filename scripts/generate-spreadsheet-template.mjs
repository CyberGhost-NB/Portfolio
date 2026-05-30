import { mkdirSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { execFileSync } from 'node:child_process';
import { fallbackPortfolioContent } from '../src/data/portfolioContent.js';

const outputFile = resolve('docs/portfolio-content-template.xlsx');
const zipFile = resolve('docs/portfolio-content-template.zip');
const workDir = resolve('.spreadsheet-template');

const sheets = [
  {
    name: 'Settings',
    headers: ['key', 'value'],
    rows: settingsRows(fallbackPortfolioContent),
  },
  {
    name: 'NavItems',
    headers: ['label', 'href', 'order'],
    rows: fallbackPortfolioContent.navItems.map((item, index) => [item.label, item.href, index + 1]),
  },
  {
    name: 'HeroStats',
    headers: ['value', 'label', 'order'],
    rows: orderedRows(fallbackPortfolioContent.hero.stats, ['value', 'label']),
  },
  {
    name: 'AboutStats',
    headers: ['value', 'label', 'order'],
    rows: orderedRows(fallbackPortfolioContent.about.stats, ['value', 'label']),
  },
  {
    name: 'AboutSkills',
    headers: ['name', 'order'],
    rows: fallbackPortfolioContent.about.skills.map((skill, index) => [skill, index + 1]),
  },
  {
    name: 'PortfolioCategories',
    headers: ['label', 'order'],
    rows: fallbackPortfolioContent.portfolio.categories.map((category, index) => [category, index + 1]),
  },
  {
    name: 'Projects',
    headers: ['id', 'title', 'description', 'category', 'image', 'year', 'url', 'order'],
    rows: fallbackPortfolioContent.portfolio.projects.map((project, index) => [
      project.id,
      project.title,
      project.description,
      project.category,
      project.image,
      project.year,
      project.url || '',
      index + 1,
    ]),
  },
  {
    name: 'SkillCategories',
    headers: ['id', 'label', 'icon', 'order'],
    rows: fallbackPortfolioContent.skills.categories.map((category, index) => [
      category.id,
      category.label,
      category.icon,
      index + 1,
    ]),
  },
  {
    name: 'Skills',
    headers: ['categoryId', 'name', 'level', 'order'],
    rows: fallbackPortfolioContent.skills.categories.flatMap((category) =>
      category.skills.map((skill, index) => [category.id, skill.name, skill.level, index + 1]),
    ),
  },
  {
    name: 'SocialLinks',
    headers: ['label', 'href', 'order'],
    rows: fallbackPortfolioContent.footer.socialLinks.map((item, index) => [item.label, item.href, index + 1]),
  },
];

rmSync(workDir, { force: true, recursive: true });
rmSync(outputFile, { force: true });
rmSync(zipFile, { force: true });

mkdirSync(resolve(workDir, '_rels'), { recursive: true });
mkdirSync(resolve(workDir, 'xl/_rels'), { recursive: true });
mkdirSync(resolve(workDir, 'xl/worksheets'), { recursive: true });
mkdirSync(dirname(outputFile), { recursive: true });

writeFileSync(resolve(workDir, '[Content_Types].xml'), contentTypesXml(sheets), 'utf8');
writeFileSync(resolve(workDir, '_rels/.rels'), packageRelationshipsXml(), 'utf8');
writeFileSync(resolve(workDir, 'xl/workbook.xml'), workbookXml(sheets), 'utf8');
writeFileSync(resolve(workDir, 'xl/_rels/workbook.xml.rels'), workbookRelationshipsXml(sheets), 'utf8');

sheets.forEach((sheet, index) => {
  writeFileSync(resolve(workDir, `xl/worksheets/sheet${index + 1}.xml`), worksheetXml(sheet), 'utf8');
});

execFileSync(
  'powershell',
  [
    '-NoProfile',
    '-Command',
    `Compress-Archive -Path '${workDir}\\*' -DestinationPath '${zipFile}' -Force; Move-Item -Path '${zipFile}' -Destination '${outputFile}' -Force`,
  ],
  { stdio: 'inherit' },
);

rmSync(workDir, { force: true, recursive: true });

console.log(`Created ${outputFile}`);

function settingsRows(content) {
  return [
    ['site.brand', content.site.brand],
    ['site.copyright', content.site.copyright],
    ['hero.name', content.hero.name],
    ['hero.title', content.hero.title],
    ['hero.tagline', content.hero.tagline],
    ['hero.avatar', content.hero.avatar],
    ['hero.welcomePrefix', content.hero.welcomePrefix],
    ['hero.primaryCtaLabel', content.hero.primaryCtaLabel],
    ['hero.primaryCtaHref', content.hero.primaryCtaHref],
    ['hero.secondaryCtaLabel', content.hero.secondaryCtaLabel],
    ['hero.secondaryCtaHref', content.hero.secondaryCtaHref],
    ['hero.identityLabel', content.hero.identityLabel],
    ['hero.initials', content.hero.initials],
    ['hero.scrollLabel', content.hero.scrollLabel],
    ['about.eyebrow', content.about.eyebrow],
    ['about.photo', content.about.photo],
    ['about.photoAlt', content.about.photoAlt],
    ['about.status', content.about.status],
    ['about.headline', content.about.headline],
    ['about.highlight', content.about.highlight],
    ['about.bio', content.about.bio],
    ['portfolio.eyebrow', content.portfolio.eyebrow],
    ['portfolio.title', content.portfolio.title],
    ['portfolio.highlight', content.portfolio.highlight],
    ['portfolio.viewProjectLabel', content.portfolio.viewProjectLabel],
    ['skills.eyebrow', content.skills.eyebrow],
    ['skills.title', content.skills.title],
    ['skills.highlight', content.skills.highlight],
    ['skills.description', content.skills.description],
    ['skills.categoryPrefix', content.skills.categoryPrefix],
    ['footer.eyebrow', content.footer.eyebrow],
    ['footer.email', content.footer.email],
  ];
}

function orderedRows(items, keys) {
  return items.map((item, index) => [...keys.map((key) => item[key]), index + 1]);
}

function contentTypesXml(sheetList) {
  const overrides = sheetList
    .map(
      (_, index) =>
        `<Override PartName="/xl/worksheets/sheet${index + 1}.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>`,
    )
    .join('');

  return xml(
    `<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>${overrides}</Types>`,
  );
}

function packageRelationshipsXml() {
  return xml(
    '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/></Relationships>',
  );
}

function workbookXml(sheetList) {
  const sheetNodes = sheetList
    .map(
      (sheet, index) =>
        `<sheet name="${escapeXml(sheet.name)}" sheetId="${index + 1}" r:id="rId${index + 1}"/>`,
    )
    .join('');

  return xml(
    `<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><sheets>${sheetNodes}</sheets></workbook>`,
  );
}

function workbookRelationshipsXml(sheetList) {
  const relationships = sheetList
    .map(
      (_, index) =>
        `<Relationship Id="rId${index + 1}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet${index + 1}.xml"/>`,
    )
    .join('');

  return xml(
    `<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">${relationships}</Relationships>`,
  );
}

function worksheetXml(sheet) {
  const rows = [sheet.headers, ...sheet.rows]
    .map((row, rowIndex) => {
      const cells = row
        .map((value, columnIndex) => {
          const ref = `${columnName(columnIndex + 1)}${rowIndex + 1}`;

          if (typeof value === 'number') {
            return `<c r="${ref}"><v>${value}</v></c>`;
          }

          return `<c r="${ref}" t="inlineStr"><is><t>${escapeXml(String(value ?? ''))}</t></is></c>`;
        })
        .join('');

      return `<row r="${rowIndex + 1}">${cells}</row>`;
    })
    .join('');

  return xml(
    `<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"><sheetData>${rows}</sheetData></worksheet>`,
  );
}

function columnName(index) {
  let name = '';
  let current = index;

  while (current > 0) {
    const remainder = (current - 1) % 26;
    name = String.fromCharCode(65 + remainder) + name;
    current = Math.floor((current - 1) / 26);
  }

  return name;
}

function escapeXml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

function xml(body) {
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>${body}`;
}
