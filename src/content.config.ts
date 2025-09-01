import { glob } from "astro/loaders";
import { defineCollection, reference, z } from "astro:content";

// Type-check frontmatter using a schema
const ministryCollection = defineCollection({
	loader: glob({ pattern: "**/[^_]*{md,mdx}", base: "./src/data/ministries" }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			heroImage: image(),
			// mappingKey allows you to match entries across languages for SEO purposes
			mappingKey: z.string().optional(),
			// blog posts will be excluded from build if draft is "true"
			draft: z.boolean().optional(),
		}),
});

// Type-check frontmatter using a schema
const blogCollection = defineCollection({
	loader: glob({ pattern: "**/[^_]*{md,mdx}", base: "./src/data/blog" }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			// reference the authors collection https://docs.astro.build/en/guides/content-collections/#defining-collection-references
			authors: z.array(reference("authors")),
			// Transform string to Date object
			pubDate: z
				.string()
				.or(z.date())
				.transform((val) => new Date(val)),
			updatedDate: z
				.string()
				.optional()
				.transform((str) => (str ? new Date(str) : undefined)),
			heroImage: image(),
			categories: z.array(z.string()),
			// mappingKey allows you to match entries across languages for SEO purposes
			mappingKey: z.string().optional(),
			// blog posts will be excluded from build if draft is "true"
			draft: z.boolean().optional(),
		}),
});

// authors
const authorsCollection = defineCollection({
	loader: glob({ pattern: "**/[^_]*{md,mdx}", base: "./src/data/authors" }),
	schema: ({ image }) =>
		z.object({
			name: z.string(),
			avatar: image(),
			about: z.string(),
			email: z.string(),
			authorLink: z.string(), // author page link. Could be a personal website, github, twitter, whatever you want
		}),
});

// other pages
const otherPagesCollection = defineCollection({
	loader: glob({ pattern: "**/[^_]*{md,mdx}", base: "./src/data/otherPages" }),
	schema: () =>
		z.object({
			title: z.string(),
			description: z.string(),
			// mappingKey allows you to match entries across languages for SEO purposes
			mappingKey: z.string().optional(),
			draft: z.boolean().optional(),
		}),
});

// each code toggle section is it's own content file
const codeToggleCollection = defineCollection({
	loader: glob({ pattern: "**/[^_]*{md,mdx}", base: "./src/data/codeToggles" }),
	schema: () =>
		z.object({
			language: z.string(),
			order: z.number(),
			icon: z.string().optional(),
			draft: z.boolean().optional(),
		}),
});

const sermonsCollection = defineCollection({
	loader: glob({ pattern: "*.json", base: "./src/data/sermons" }),
	schema: () =>
		z.object({
			id: z.string(),
			fullTitle: z.string(),
			displayTitle: z.string(),
			languageCode: z.string(),
			bibleText: z.string().optional(),
			subtitle: z.string().optional(),
			moreInfoText: z.string().optional(),
			eventType: z.string(),
			broadcaster: z.object({
				type: z.string(),
				lite_type: z.string(),
				id: z.string(),
				displayName: z.string(),
				location: z.string(),
				imageURL: z.string(),
				imageURLResizable: z.string(),
				languageCode: z.string(),
				shortName: z.string(),
				homePageURL: z.string(),
				albumArtURL: z.string(),
				listenLineNumber: z.string().optional(),
				categories: z.number().int(),
				welcomeVideoID: z.string().optional(),
				disabled: z.boolean(),
				groups: z.array(
					z.string()
				).optional(),
				bannerImageURL: z.string(),
			}),
			speaker: z.object({
				id: z.number().int(),
				displayName: z.string().optional(),
				portaitURL: z.string().optional(),
				albumArtURL: z.string().optional(),
				roundedThumbnailImageURL: z.string().optional(),
				portraitURLResizable: z.string().optional(),
				roundedThumbnailImageURLResizable: z.string().optional(),
			}),
			series: z.object({
				type: z.string(),
				id: z.number().int(),
			}).optional(),
			hasAudio: z.boolean(),
			hasVideo: z.boolean(),
			hasPDF: z.boolean(),
			audioDurationSeconds: z.number().int().optional(),
			videoDurationSeconds: z.number().int().optional(),
			preachDate: z.string(),
			publishTimestamp: z.number().int(),
			type: z.string(),
			updateDate: z.number().int().optional(),
			publishDate: z.string(),
			displayEventType: z.string(),
			externalLink: z.string().optional(),
			media: z.object({
				type: z.string(),
				audio: z.array(
					z.object({
						type: z.string(),
						mediaType: z.string(),
						live: z.boolean(),
						streamURL: z.string().optional(),
						eventStreamURL: z.string().optional(),
						downloadURL: z.string().optional(),
						thumbnailImageURL: z.string().optional(),
						bitrate: z.number().int().optional(),
						fileSizeBytes: z.number().int().optional(),
						adaptiveBitrate: z.boolean(),
						duration: z.number().int().optional(),
						audioCodec: z.string().optional(),
						videoCodec: z.string().optional(),
						language: z.string().optional(),
						mediaFilename: z.string(),
						autoGenerated: z.boolean().optional(),
					})
				),
				video: z.array(
					z.object({
						type: z.string(),
						mediaType: z.string(),
						live: z.boolean(),
						streamURL: z.string().optional(),
						eventStreamURL: z.string().optional(),
						downloadURL: z.string().optional(),
						thumbnailImageURL: z.string().optional(),
						bitrate: z.number().int().optional(),
						fileSizeBytes: z.number().int().optional(),
						adaptiveBitrate: z.boolean(),
						duration: z.number().int().optional(),
						audioCodec: z.string().optional(),
						videoCodec: z.string().optional(),
						language: z.string().optional(),
						mediaFilename: z.string(),
						autoGenerated: z.boolean().optional(),
					})
				),
				text: z.array(
					z.object({
						type: z.string(),
						mediaType: z.string(),
						live: z.boolean(),
						streamURL: z.string().optional(),
						eventStreamURL: z.string().optional(),
						downloadURL: z.string().optional(),
						thumbnailImageURL: z.string().optional(),
						bitrate: z.number().int().optional(),
						fileSizeBytes: z.number().int().optional(),
						adaptiveBitrate: z.boolean(),
						duration: z.number().int().optional(),
						audioCodec: z.string().optional(),
						videoCodec: z.string().optional(),
						language: z.string().optional(),
						mediaFilename: z.string(),
						autoGenerated: z.boolean().optional(),
					})
				),
				caption: z.array(
					z.object({
						type: z.string(),
						mediaType: z.string(),
						live: z.boolean(),
						streamURL: z.string().optional(),
						eventStreamURL: z.string().optional(),
						downloadURL: z.string().optional(),
						thumbnailImageURL: z.string().optional(),
						bitrate: z.number().int().optional(),
						fileSizeBytes: z.number().int().optional(),
						adaptiveBitrate: z.boolean(),
						duration: z.number().int().optional(),
						audioCodec: z.string().optional(),
						videoCodec: z.string().optional(),
						language: z.string().optional(),
						mediaFilename: z.string(),
						autoGenerated: z.boolean().optional(),
					})
				),
			}),
			waveformPeaksURL: z.string(),
			keywords: z.string().optional(),
		})
})

export const collections = {
	ministries: ministryCollection,
	blog: blogCollection,
	authors: authorsCollection,
	otherPages: otherPagesCollection,
	codeToggles: codeToggleCollection,
	sermons: sermonsCollection,
};
