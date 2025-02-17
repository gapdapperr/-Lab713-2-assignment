import { S3Client } from "@aws-sdk/client-s3"

const s3Client = new S3Client ({
    credentials: {
        accessKeyId: "2b31916c18c0ae98be40385b8efefe9b",
        secretAccessKey:
        "202f3d64a2d610ef5a2a9dda35e9850b8905cd52d62540672aebb280a1d1a75a"
    }
,
endpoint: "https://bwmcfuxuhqmvcqblgilv.supabase.co/storage/v1/s3",
region: "ap-southeast-1",
forcePathStyle: true})

export default s3Client