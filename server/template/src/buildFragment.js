
const buildFragmentUrl = (base, port, path) => `${base}${port && `:${port}`}${path ? `/${path}` : ''}`;

export default ({ baseUrl, fallbackUrl, port }) => ({ isAsync = false, fragmentId = null, isPrimary = false, isPublic = false }) => {
  return `
  <fragment src="${buildFragmentUrl(baseUrl, port, fragmentId)}" id="${fragmentId}" ${fallbackUrl && `fallbackUrl="${fallbackUrl}`}/>
  `;
}
