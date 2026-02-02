import imageCompression from 'browser-image-compression';

const IMGBB_API_KEY = import.meta.env.VITE_IMGBB_API_KEY;

export const uploadImage = async (file) => {
    if (!IMGBB_API_KEY) {
        console.error("ImgBB API Key missing");
        return null; // Return null or mock URL
    }

    try {
        // 1. Compress Image
        const options = {
            maxSizeMB: 0.8, // Target ~800KB
            maxWidthOrHeight: 1920,
            useWebWorker: true,
            fileType: 'image/webp',
            initialQuality: 0.70 // 70% quality as requested
        };

        const compressedFile = await imageCompression(file, options);
        
        // 2. Upload to ImgBB
        const formData = new FormData();
        formData.append('image', compressedFile);

        const response = await fetch(`https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`, {
            method: 'POST',
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            return data.data.url;
        } else {
            console.error("ImgBB Upload Failed:", data);
            throw new Error('Upload failed');
        }

    } catch (error) {
        console.error("Error uploading image:", error);
        throw error;
    }
};
