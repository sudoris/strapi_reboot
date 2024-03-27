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
    dataFile: Attribute.Media;
  };
}

export interface DatasetSource extends Schema.Component {
  collectionName: 'components_dataset_sources';
  info: {
    displayName: 'Source';
  };
  attributes: {
    title: Attribute.String;
    url: Attribute.String;
  };
}

export interface DatasetTimePeriod extends Schema.Component {
  collectionName: 'components_dataset_time_periods';
  info: {
    displayName: 'TimePeriod';
  };
  attributes: {
    yearType: Attribute.String;
    yearMin: Attribute.String;
    yearMax: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'app.contributor': AppContributor;
      'article.author': ArticleAuthor;
      'article.file-pdf': ArticleFilePdf;
      'dataset.source': DatasetSource;
      'dataset.time-period': DatasetTimePeriod;
    }
  }
}
