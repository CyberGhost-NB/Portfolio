const SHEET_NAMES = {
  settings: 'Settings',
  navItems: 'NavItems',
  heroStats: 'HeroStats',
  aboutStats: 'AboutStats',
  aboutSkills: 'AboutSkills',
  portfolioCategories: 'PortfolioCategories',
  projects: 'Projects',
  skillCategories: 'SkillCategories',
  skills: 'Skills',
  socialLinks: 'SocialLinks',
};

function doGet() {
  return jsonResponse(buildPortfolioContent());
}

function buildPortfolioContent() {
  const settings = readSettings();
  const skillCategories = readObjects(SHEET_NAMES.skillCategories);
  const skills = readObjects(SHEET_NAMES.skills);

  return {
    site: {
      brand: getSetting(settings, 'site.brand'),
      copyright: getSetting(settings, 'site.copyright'),
    },
    navItems: readObjects(SHEET_NAMES.navItems),
    hero: {
      name: getSetting(settings, 'hero.name'),
      title: getSetting(settings, 'hero.title'),
      tagline: getSetting(settings, 'hero.tagline'),
      avatar: getSetting(settings, 'hero.avatar'),
      welcomePrefix: getSetting(settings, 'hero.welcomePrefix'),
      primaryCtaLabel: getSetting(settings, 'hero.primaryCtaLabel'),
      primaryCtaHref: getSetting(settings, 'hero.primaryCtaHref'),
      secondaryCtaLabel: getSetting(settings, 'hero.secondaryCtaLabel'),
      secondaryCtaHref: getSetting(settings, 'hero.secondaryCtaHref'),
      identityLabel: getSetting(settings, 'hero.identityLabel'),
      initials: getSetting(settings, 'hero.initials'),
      scrollLabel: getSetting(settings, 'hero.scrollLabel'),
      stats: readObjects(SHEET_NAMES.heroStats),
    },
    about: {
      eyebrow: getSetting(settings, 'about.eyebrow'),
      photo: getSetting(settings, 'about.photo'),
      photoAlt: getSetting(settings, 'about.photoAlt'),
      status: getSetting(settings, 'about.status'),
      headline: getSetting(settings, 'about.headline'),
      highlight: getSetting(settings, 'about.highlight'),
      bio: getSetting(settings, 'about.bio'),
      skills: readObjects(SHEET_NAMES.aboutSkills).map(function (row) {
        return row.name;
      }),
      stats: readObjects(SHEET_NAMES.aboutStats),
    },
    portfolio: {
      eyebrow: getSetting(settings, 'portfolio.eyebrow'),
      title: getSetting(settings, 'portfolio.title'),
      highlight: getSetting(settings, 'portfolio.highlight'),
      viewProjectLabel: getSetting(settings, 'portfolio.viewProjectLabel'),
      categories: readObjects(SHEET_NAMES.portfolioCategories).map(function (row) {
        return row.label;
      }),
      projects: readObjects(SHEET_NAMES.projects),
    },
    skills: {
      eyebrow: getSetting(settings, 'skills.eyebrow'),
      title: getSetting(settings, 'skills.title'),
      highlight: getSetting(settings, 'skills.highlight'),
      description: getSetting(settings, 'skills.description'),
      categoryPrefix: getSetting(settings, 'skills.categoryPrefix'),
      categories: skillCategories.map(function (category) {
        return {
          id: category.id,
          label: category.label,
          icon: category.icon,
          skills: skills.filter(function (skill) {
            return skill.categoryId === category.id;
          }),
        };
      }),
    },
    footer: {
      eyebrow: getSetting(settings, 'footer.eyebrow'),
      email: getSetting(settings, 'footer.email'),
      socialLinks: readObjects(SHEET_NAMES.socialLinks),
    },
  };
}

function readSettings() {
  return readObjects(SHEET_NAMES.settings).reduce(function (settings, row) {
    settings[row.key] = row.value;
    return settings;
  }, {});
}

function getSetting(settings, key) {
  return settings[key] || '';
}

function readObjects(sheetName) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);

  if (!sheet) {
    return [];
  }

  const values = sheet.getDataRange().getValues();

  if (values.length < 2) {
    return [];
  }

  const headers = values[0].map(function (header) {
    return String(header).trim();
  });

  return values
    .slice(1)
    .map(function (row) {
      return headers.reduce(function (record, header, index) {
        if (header) {
          record[header] = normalizeValue(row[index]);
        }

        return record;
      }, {});
    })
    .filter(function (record) {
      return Object.keys(record).some(function (key) {
        return key !== 'order' && record[key] !== '';
      });
    })
    .sort(function (a, b) {
      return Number(a.order || 0) - Number(b.order || 0);
    })
    .map(function (record) {
      delete record.order;
      return record;
    });
}

function normalizeValue(value) {
  if (value instanceof Date) {
    return Utilities.formatDate(value, Session.getScriptTimeZone(), 'yyyy-MM-dd');
  }

  if (typeof value === 'string') {
    return value.trim();
  }

  return value === null || value === undefined ? '' : value;
}

function jsonResponse(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload)).setMimeType(ContentService.MimeType.JSON);
}

function setupPortfolioSheets() {
  const sheets = [
    [SHEET_NAMES.settings, ['key', 'value']],
    [SHEET_NAMES.navItems, ['label', 'href', 'order']],
    [SHEET_NAMES.heroStats, ['value', 'label', 'order']],
    [SHEET_NAMES.aboutStats, ['value', 'label', 'order']],
    [SHEET_NAMES.aboutSkills, ['name', 'order']],
    [SHEET_NAMES.portfolioCategories, ['label', 'order']],
    [SHEET_NAMES.projects, ['id', 'title', 'description', 'category', 'image', 'year', 'url', 'order']],
    [SHEET_NAMES.skillCategories, ['id', 'label', 'icon', 'order']],
    [SHEET_NAMES.skills, ['categoryId', 'name', 'level', 'order']],
    [SHEET_NAMES.socialLinks, ['label', 'href', 'order']],
  ];

  sheets.forEach(function (config) {
    const sheetName = config[0];
    const headers = config[1];
    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = spreadsheet.getSheetByName(sheetName) || spreadsheet.insertSheet(sheetName);

    sheet.clear();
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    sheet.setFrozenRows(1);
  });
}
