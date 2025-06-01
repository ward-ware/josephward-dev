import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";
import * as awsx from "@pulumi/awsx";

//Import configuration settings
const config = new pulumi.Config();
const path = config.get("path") || "portfolio";
const indexDocument = config.get("indexDocument") || "index.html";
const errorDocument = config.get("errorDocument") || "404.html";

// Create an AWS resource (S3 Bucket)
const bucket = new aws.s3.BucketV2("josephward-portfolio");

const bucketWebsite = new aws.s3.BucketWebsiteConfigurationV2("josephward-portfolio-website", {
    bucket: bucket.id,
    indexDocument: {suffix: indexDocument},
    errorDocument: {key: errorDocument},
});

// Configure ownership and permissions
const ownershipControls = new aws.s3.BucketOwnershipControls("josephward-portfolio-ownership-controls", {
    bucket: bucket.id,
    rule: {
        objectOwnership: "ObjectWriter",
    },
});

// Configure public access
const publicAccessBlock = new aws.s3.BucketPublicAccessBlock("josephward-portfolio-public-access-block", {
    bucket: bucket.id,
    blockPublicAcls: false,
});

// Export the name of the bucket
export const bucketName = bucket.id;

// Export the URLs and hostnames of the bucket and distribution.
export const originURL = pulumi.interpolate`http://${bucketWebsite.websiteEndpoint}`;
export const originHostname = bucketWebsite.websiteEndpoint;