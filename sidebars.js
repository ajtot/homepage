/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],
  foundation: [
    'foundation/intro',
    {
      type: 'category',
      label: 'Cores',
      items: ['foundation/color', 'foundation/color-good-practices'],
    },
    {
      type: 'category',
      label: 'Tipografia',
      items: ['foundation/typo', 'foundation/typo-styles'],
    },
    'foundation/spacing',
    'foundation/icon',
    'foundation/image',
    'foundation/logo',
  ],
  about: [
    'about/intro',
    'about/principles',
    {
      type: 'category',
      label: 'Começando',
      items: ['about/getting-started', 'about/getting-started-design', 'about/contribution-guide'],
    },
    'about/team',
    {
      type: 'category',
      label: 'Changelog',
      items: ['about/changelog', 'about/changelog-portal'],
    },
  ],
  designtokens: [
    'designtokens/designtokens',
    'designtokens/tokenscores',
    'designtokens/tokenstypo',
    'designtokens/tokensborder',
    'designtokens/tokensspacing',
    'designtokens/tokensshadow',
    //'changelog'
  ],
  componenents: [{ type: 'autogenerated', dirName: 'components' }],
  guideline: [{ type: 'autogenerated', dirName: 'guideline' }],

  //components: ['components/button','components/card','components/checkbox','components/link'],
  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */
};
