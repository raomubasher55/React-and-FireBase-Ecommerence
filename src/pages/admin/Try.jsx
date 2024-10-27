import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { storage } from '../../firebase/firebaseCongif';

const Try = () => {
    const [file, setFile] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [imageURL, setImageURL] = useState('');

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleUpload = async () => {
        if (!file) return;

        setUploading(true);

        try {
            // Create a storage reference
            const storageRef = ref(storage, `images/${file.name}`);

            await uploadBytes(storageRef, file);
            // Get the download URL
            const url = await getDownloadURL(storageRef);


            const productRef = collection(fireDB, 'products');
            await addDoc(productRef, product)
            toast.success("Add product successfully");
            logEvent(analytics, 'add_to_cart', {
              title: product.title,
              price: product.price,
              category: product.category
            });

            setImageURL(url);
            toast.success('Image uploaded successfully!');
        } catch (error) {
            console.error('Upload failed:', error);
            toast.error('Image upload failed.');
        } finally {
            setUploading(false);
        }
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload} disabled={uploading}>
                {uploading ? 'Uploading...' : 'Upload Image'}
            </button>
            {imageURL && (
                <div>
                    <h3>Uploaded Image:</h3>
                    <img src={imageURL} alt="Uploaded" style={{ width: '300px' }} />
                </div>
            )}
        </div>
    )
}

export default Try
