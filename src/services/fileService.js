import WordArray from 'crypto-js/lib-typedarrays';
import md5 from 'crypto-js/md5';
import { get, upload } from './api';

const { REACT_APP_API_ROOT } = process.env;

export const getInfo = () => {
    const url = `${REACT_APP_API_ROOT}/status/file-storage/info`;
    return get(url);
};

export const uploadFile = async file => {
    const url = `${REACT_APP_API_ROOT}/files`;
    const data = await buildFileData(file);
    return upload(url, data);
};

const buildFileData = async file => {
    const fileData = new FormData();
    fileData.append('file', file);

    const contentMD5 = await calculateContentMD5(file);
    fileData.append('contentMD5', contentMD5);

    return fileData;
};

const calculateContentMD5 = file =>
    new Promise(resolve => {
        const reader = new FileReader();
        reader.onload = () => {
            // TODO: https://github.com/veraPDF/verapdf-webapp-gui/issues/31
            const wordArray = WordArray.create(reader.result);
            const contentMD5 = md5(wordArray).toString();
            resolve(contentMD5);
        };
        reader.readAsArrayBuffer(file);
    });
