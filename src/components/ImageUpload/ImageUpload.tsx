import React, { useState } from 'react';
import ImageUploader from 'react-images-upload';
import Axios from 'axios';
import { PhotoApi } from '../../constants';

const UploadComponent = props => (
    <form>
        <ImageUploader
            key="image-uploader"
            withIcon={true}
            singleImage={true}
            withPreview={true}
            buttonText="Choose an image"
            onChange={props.onImage}
            imgExtension={['.jpg', '.png', '.jpeg']}
        ></ImageUploader>
    </form>
);

const App = () => {
    const [progress, setProgress] = useState('getUpload');
    const [url, setImageURL] = useState(PhotoApi);
    const [errorMessage, setErrorMessage] = useState('');

    const onUrlChange = e => {
        setImageURL(e.target.value);
    };

    const onImage = async (failedImages, successImages) => {
        if (!url) {
            console.log('missing Url');
            setErrorMessage('missing a url to upload to');
            setProgress('uploadError');
            return;
        }

        setProgress('uploading');

        try {
            console.log('successImages', successImages);
            const parts = successImages[0].split(';');
            // const mime = parts[0].split(':')[1];
            // const name = parts[1].split('=')[1];
            const data = parts[2];
            await Axios.post(url,data).then(res=>{
              console.log(res)
            });

            // setImageURL(res.data.imageURL);
            setProgress('uploaded');
        } catch (error) {
            console.log('error in upload', error);
            //setErrorMessage(error.message);
            setProgress('uploadError');
        }
    };

    const content = () => {
        switch (progress) {
            case 'getUpload':
                return <UploadComponent onUrlChange={onUrlChange} onImage={onImage} url={url} />;
            case 'uploading':
                return <h2>Uploading....</h2>;
            case 'uploaded':
                return <img src={url} alt="uploaded" />;
            case 'uploadError':
                return (
                    <>
                        <div>Error message = {errorMessage}</div>
                        <UploadComponent onUrlChange={onUrlChange} onImage={onImage} url={url} />
                    </>
                );
        }
    };

    return (
        <div className="App">
            {content()}
        </div>
    );
};

export default App;