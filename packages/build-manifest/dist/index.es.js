import fs from 'fs';
import path from 'path';

const formatPath = staticPath => path => `${staticPath}/${path}`;

const renderCssToString = assets => assets.map(asset =>
  `<link href="${asset}" rel="stylesheet">`
).join('\n');

const renderJsToString = assets => assets.map(asset =>
  `<script defer src="${asset}" type="text/javascript"></script>`
).join('\n');

var index = async (rootDir, options) => {
  const { staticPath = '' } = options;

  try {
    const files = await fs.readdirSync(rootDir);
    if (!files || !Array.isArray(files)) {
      return new Error('files is not an array');
    }
    const formatter = formatPath(staticPath);

    return files.reduce((acm, file) => {
      const ext = path.extname(file);
      const cleanExt = ext.replace('.', '');
      const name = path.basename(file, ext);

      if (name && cleanExt) {
        if (acm[cleanExt] && Array.isArray(acm[cleanExt])) {
          acm[cleanExt].push(formatter(file));
        } else {
          acm[cleanExt] = [formatter(file)];
        }
      }
      return acm;
    }, {});

  } catch (e) {
    throw e;
  }
};

export default index;
export { renderCssToString, renderJsToString };
