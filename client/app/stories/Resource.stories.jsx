import React from 'react';
import { Resource } from '../components/Resource';

const tags = [
  'open_source',
  'tech_industry',
  'free',
  'workplace',
  'podcast',
  'books',
];

export default {
  title: 'Components/Resource',
  parameters: {
    backgrounds: { default: 'mulberry' },
  },
};

export const WithTags = () => (
  <Resource
    tags={tags.concat(tags)}
    title="LifeSIGNS: Self Injury Guidance & Network Support (UK)"
    link="http://www.lifesigns.org.uk/"
  />
);

WithTags.story = {
  name: 'With tags',
};

export const WithoutTags = () => (
  <Resource
    title="A very long title for a resource that should wrap to two lines and then some or not"
    link="www.if-me.org"
    author="Author with a very very long name that is usually an edge case"
  />
);

WithoutTags.story = {
  name: 'Without tags',
};

export const WithAllOptions = () => (
  <Resource
    tags={tags.concat(tags)}
    title="Invisible Illnesses: depression is an ocean, and another measure to consider"
    link="www.if-me.org"
    author="Desi Rottman"
  />
);

WithAllOptions.story = {
  name: 'With all options',
};
