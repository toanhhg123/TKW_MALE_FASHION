const pathnameSplit = document.location.pathname.split('/');

export const baseURL = pathnameSplit.find((e) => e === 'TKW_MALE_FASHION')
    ? '/TKW_MALE_FASHION'
    : '';
