# TODO - Make website fully responsive (all pages)

## Step 1: Create a responsive baseline
- [x] Update `src/components/Hero.jsx` to remove/relax hard min-heights (e.g. `min-h-[620px]`, `h-[88vh]`) and scale decorative blobs for small screens.

## Step 2: Fix map section height

- [ ] Update `src/components/Locations.jsx` to prevent map overflow/cropping on smaller screens (replace `min-h-[400px]` with responsive min-height / aspect-based sizing).




## Step 3: Verify Navbar + dropdown behavior
- [ ] Adjust `src/components/Navbar.jsx` dropdown positioning/spacing so it doesn’t overlap content on small widths.

## Step 4: Typography scaling pass
- [ ] Replace the most problematic `text-[px]` values with responsive `text-sm/text-base` + breakpoints or clamp-based styles where needed.

## Step 5: Validate all routes
- [ ] Manually test in browser at multiple widths: 320, 375, 768, 1024, 1366.
- [ ] Verify: `/`, `/about`, `/services`, `/services/:id`, `/locations`, `/contact`, `/appointment`, `/insurance`.

