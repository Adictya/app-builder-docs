import React from 'react';
import Translate from '@docusaurus/Translate';
import {ThemeClassNames} from '@docusaurus/theme-common';
import IconEdit from '@theme/IconEdit';
export default function EditThisPage({editUrl}) {
  return (
    <a
      href={editUrl}
      target="_blank"
      rel="noreferrer noopener"
      className={ThemeClassNames.common.editThisPage}>
      <Translate
        id="theme.common.editThisPage"
        description="The link label to edit the current page">
        Suggest Edit
      </Translate>
      <IconEdit />
    </a>
  );
}
