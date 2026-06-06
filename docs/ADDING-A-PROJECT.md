# Adding a new project to b4builders.in

You add a project by creating one content file and dropping its images into a folder, then pushing to GitHub. Vercel redeploys automatically.

## 1. Add the images

- Create a folder: `/public/projects/<slug>/` (slug = lowercase, hyphenated, e.g. `vaikunth`).
- Before adding photos, resize so the long edge is ~2400px and export at reasonable quality (keeps the repo light). next/image optimises delivery automatically.
- Add a clear cover image (e.g. `cover.jpg`) and 10–15 gallery images.

## 2. Upload the video (optional)

- Upload the walkthrough to the B4 Builders YouTube channel.
- Copy the video URL — you'll paste it into the project file.

## 3. Create the project file

- Open `/src/content/projects/` in your editor.
- Copy `vaikunth.ts` to a new file named `<slug>.ts`.
- Fill in the fields:
  - `slug`: lowercase, hyphenated — must match the folder name you created.
  - `name`: the display name of the project.
  - `track`: `"traditional"` or `"modern"` — decides which track page it shows on and how it filters under Work.
  - `isInterior`: set `true` only if it should also appear under Interiors.
  - `type`: e.g. `"Residential house"`, `"Villa"`, `"Heritage restoration"`.
  - `area`: neighbourhood/locality, e.g. `"Sarjapur Road, Bengaluru"`.
  - `status`: `"completed"`, `"ongoing"`, or `"design"`.
  - `year`: e.g. `"2024"`.
  - `cover`: `/projects/<slug>/cover.jpg`.
  - `gallery`: an array of image paths, e.g. `["/projects/<slug>/01.jpg", "/projects/<slug>/02.jpg"]`.
  - `videos`: YouTube URL(s), e.g. `["https://youtu.be/xxxxxxxxxxx"]`.
  - `mapUrl`: Google Maps link if you have one.
  - `highlights`: 2–4 short bullet points about the project.
  - `body`: 2–4 sentences on the brief and what makes the project special.
  - `published`: set `true` to make it live. Leave `false` to keep it hidden while you finish.

- Add the new file to the index: open `/src/content/projects/index.ts`, import the new project, and add it to the `allProjects` array.

## 4. Preview locally (optional)

```
npm run dev
```

Open http://localhost:3000/work and check the new card and detail page.

## 5. Publish

```
git add src/content/projects/<slug>.ts public/projects/<slug>/
git commit -m "Add project: <name>"
git push
```

Vercel rebuilds and the project goes live in ~1–2 minutes.

## Notes

- To feature a project on the home page, add its slug to the `featuredSlugs` array in `/src/content/projects/index.ts`.
- Projects with `published: false` are never visible on the live site but their routes exist in the build.
- More than ~50 projects? Time to move images to Cloudinary — see `docs/BACKLOG.md`.
