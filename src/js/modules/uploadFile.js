function uploadFile(){
    const uploadInput = document.querySelector('.selected-product__upload-input');
    const uploadBtn = document.querySelector('.selected-product__upload-btn');

    uploadBtn.addEventListener('click', () => {
        uploadInput.click();
    });
}
export default uploadFile;
