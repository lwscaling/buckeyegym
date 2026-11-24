# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

People in and around Tallmadge / Akron, Ohio looking for a real strength gym: beginners walking into a gym for the first time, serious lifters and bodybuilders, students, military, seniors and first responders (discount tier), and visitors passing through who want a day pass. They usually find the site from Google Maps or search on a phone, decide whether the place is legit, and check price, hours and location.

## Product Purpose

Marketing site for Buckeye Gym, a family-owned, old-school strength gym at 137 East Ave, Suite 102, Tallmadge, OH 44278. Success = a visitor walks in (day pass / first visit). Online signup (GymMaster) and calling are secondary actions.

## Positioning

A real iron gym since 1985, not a wellness club: deep free-weight and plate-loaded machine lineup (dumbbells to 190 lb), a hand-drawn Mr. Olympia bodybuilder mural across the walls, red walls and white/black/red machines, no contracts, no hidden fees, beginners and pro bodybuilders training side by side.

## Operating Context

- Hours: Mon–Fri 4:30am–9pm, Sat 8am–5pm, Sun 9am–4pm.
- Phone (330) 633-3084, email rkpropst11@yahoo.com, Instagram @buckeye_gym_.
- Signup: https://buckeyegym.gymmasteronline.com/portal/signup
- Google Street View virtual tour embed exists.

## Capabilities and Constraints

- Next.js 16 static export (`output: "export"`) deployed as static assets to the `buckeyegym` Cloudflare Worker. No backend.
- Pricing: Regular $42.70/mo; Discount $37.36/mo (students, military, seniors, first responders, valid ID); Flex & Family from $10/visit (day pass, 1-week visitor pass, 10-visit pack that never expires, family & couples plans). No long-term contracts.
- Privacy and Terms pages exist.

## Brand Commitments

- Name: Buckeye Gym. "Since 1985" is confirmed and may be used.
- Mascot: muscular buckeye-nut character (`public/gym/9751049e95a4cbf8.gif`, `buckeye-header-white.png`).
- Vintage painted sign "Buckeye Gym · Since 1985 · Tallmadge · Ohio" (`public/gym/06e35c5d3070076d.png`).
- Voice: blunt, old-school, respectful. House rule: "Respect the gym. Respect your fellow lifters. Respect yourself."
- The gym's boxer dog appears in photos but must not be featured as a site element.
- Owner explicitly dislikes sites that look AI-generated / templated, and the flat feel of the prior version.

## Evidence on Hand

- Real photos of the floor, machines, dumbbell racks, mural: `public/gym/*.webp|jpeg`. `544ba4aa6ad034be.jpg` is a stock photo; do not use it as gym evidence.
- Trainers: Megan Brown, Jason Lucas, Heather Pastirchak with credentials (in `app/page.tsx`).
- Ten member reviews (in `app/page.tsx`); "90+ five-star Google reviews" claim from prior site.
- No member counts, transformation stats, or class schedules exist — do not invent them.

## Product Principles

1. Show the actual gym; real photos and real iron over abstraction.
2. Get people through the door: price, hours, and location are never more than one tap away.
3. No fake claims; everything on the page is true of this gym.
4. Old-school confidence, welcoming to first-timers.
