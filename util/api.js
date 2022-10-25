export function getStrapiURL(path = '') {
  return `${'https://warm-dawn-10856.herokuapp.com/api'}${path}`;
}

export function getStrapiMediaURL(path) {
  return `${'https://warm-dawn-10856.herokuapp.com'}${path}`;
}

// Helper to make GET requests to Strapi
export async function fetchAPI(path) {
  const requestUrl = getStrapiURL(path);
  const response = await fetch(requestUrl);
  const data = await response.json();
  return await data;
}

export async function getLadder() {
  const ladder = await fetchAPI('/ladders?sort=rank&pagination[pageSize]=100');
  return ladder;
}

export async function getLadiesLadder() {
  const ladder = await fetchAPI(
    '/ladies-ladders?sort=rank&pagination[pageSize]=100'
  );
  return ladder;
}

export async function getCommittee() {
  const committee = await fetchAPI('/committees');
  return committee;
}

export async function getCommitteeDeep() {
  const committee = await fetchAPI('/committees?populate=*&sort=rank');
  return committee;
}

export async function getMemberships() {
  const memberships = await fetchAPI('/memberships');
  return memberships;
}

export async function getMembershipsDeep() {
  const memberships = await fetchAPI('/memberships?populate=*');
  return memberships;
}

export async function getGalleryCategory() {
  const galleryCategories = await fetchAPI('/gallery-categories');
  return galleryCategories;
}

export async function getGalleryCategoryDeep() {
  const galleryCategories = await fetchAPI('/gallery-categories?populate=deep');
  return galleryCategories;
}

export async function getGallery() {
  const gallery = await fetchAPI('/galleries?populate[0]=image');
  return gallery;
}

export async function getGalleryFiltered(category) {
  const filteredGallery = await fetchAPI(
    `/galleries?filters[category][title][$eq]=${category}&populate[0]=image`
  );
  return filteredGallery;
}

export async function sendEmail(name, email, number, message) {
  const body = {
    token,
    formName: 'Test Form',
    FormData: {
      name: name,
      email: email,
      number: number,
      message: message,
    },
  };
  const requestOptions = {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: body,
  };
  const emailResponse = await fetch(
    'https://warm-dawn-10856.herokuapp.com/api/ezforms/submit/',
    requestOptions
  );
  return emailResponse;
}
