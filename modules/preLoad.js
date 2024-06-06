const loader = document.createElement('div');
loader.classList.add('loader');

const loaderSpinner = document.createElement('div');
loader.classList.add('loader__spinner');

loader.append(loaderSpinner);

export const showLoader = () => {
    document.body.append(loader);
}

export const closeLoader = () => {
    loader.remove()
}
