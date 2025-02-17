import React, { memo } from 'react';
import { DocSidebarItemsExpandedStateProvider } from '@docusaurus/theme-common';
import DocSidebarItem from '@theme/DocSidebarItem';
// TODO this item should probably not receive the "activePath" props
// TODO this triggers whole sidebar re-renders on navigation
function DocSidebarItems({ items, ...props }) {
  return (
    <DocSidebarItemsExpandedStateProvider>
      {items.map((item, index) => (
        item.docId !== 'notFound' &&
        <DocSidebarItem key={index} item={item} index={index} {...props} />
      ))}
    </DocSidebarItemsExpandedStateProvider>
  );
}
// Optimize sidebar at each "level"
export default memo(DocSidebarItems);
