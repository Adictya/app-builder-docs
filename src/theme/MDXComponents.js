import React from 'react';
// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
import Collapsible from '../components/Collapsible';
import SubTitle from '../components/SubTitle';


export default {
  // Re-use the default mapping
  ...MDXComponents,
  // Map our custom components to the global scope
  collapsible: Collapsible,
  subtitle : SubTitle
};