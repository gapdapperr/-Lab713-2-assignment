import S3Client from "../awsConfig";
import { PutObjectCommand } from "@aws-sdk/client-s3";

export async function uploadFile(bucket: string, filePath: string, file: Express.Multer.File): Promise<string> {
    const params = {
        Bucket: bucket,
        Key: filePath,
        Body: file.buffer,
        ContentType: file.mimetype
    }

    try {
        const data = await S3Client.send(new PutObjectCommand(params))
        console.log('File uploaded successfully', data)
        const publicUrl = `https://bwmcfuxuhqmvcqblgilv.supabase.co/storage/v1/object/public/images/${filePath}`
        return publicUrl
    }
    catch (error) {
        console.error('Error uploading file:', error)
        throw error;
    }
}