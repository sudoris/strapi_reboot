import type { Schema, Attribute } from '@strapi/strapi';

export interface AppContributor extends Schema.Component {
  collectionName: 'components_app_contributors';
  info: {
    displayName: 'Contributor';
  };
  attributes: {
    title: Attribute.String;
  };
}

export interface ArticleAuthor extends Schema.Component {
  collectionName: 'components_article_authors';
  info: {
    displayName: 'Author';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
  };
}

export interface ArticleFilePdf extends Schema.Component {
  collectionName: 'components_article_file_pdfs';
  info: {
    displayName: 'FilePDF';
    description: '';
  };
  attributes: {
    type: Attribute.String;
    data: Attribute.JSON;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'app.contributor': AppContributor;
      'article.author': ArticleAuthor;
      'article.file-pdf': ArticleFilePdf;
    }
  }
}
