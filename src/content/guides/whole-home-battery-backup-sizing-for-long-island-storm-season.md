---
title: Whole Home Battery Backup Sizing for Long Island Storm Season
slug: whole-home-battery-backup-sizing-for-long-island-storm-season
description: How many kWh of battery you actually need for Long Island storm season — critical-loads vs whole-home math, panel capacity, and real installed cost tiers.
keyword: "whole home battery backup sizing for long island storm season"
vertical: storage
pillar_url: /services/battery-storage/
pillar_label: "Battery Storage"
related_service: "Battery Storage"
published: "2026-07-06"
updated: "2026-07-06"
hero_image: ""
faqs:
  - q: How many kWh of battery do I need to run my whole house on Long Island?
    a: >-
        For a 2,000–2,800 sq ft Colonial with gas heat and central AC, budget 20–27 kWh to cover the house minus the AC compressor through a cloudy multi-day outage, or 30–40 kWh to keep central AC running too. A smaller Cape or ranch with gas heat and window units can often get by on 13.5–20 kWh. The honest way to land on a number is to add up your panel's actual continuous draw in watts, multiply by the hours you want covered, and convert to kWh — guessing from square footage alone under- or over-sizes the system in both directions.
  - q: Is a critical-loads-only battery enough for a nor'easter, or do I need whole-home coverage?
    a: >-
        A critical-loads panel — fridge, sump pump, furnace blower, some lighting, Wi-Fi — draws roughly 2.5–4 kW continuous and fits comfortably on a single 10–13.5 kWh unit for 12–24+ hours, longer with any solar recharge. That's enough for most nor'easters, which average 2–4 days. Whole-home coverage adds central AC, electric dryer, oven, and an EV charger if you have one — loads that can double or triple continuous draw and push total system size past 20 kWh. Whole-home makes more sense if you're on well water (a well pump is not optional) or if summer hurricane-season heat makes going without AC a real health risk.
  - q: Can my existing 200A panel actually support a whole-home battery backup system?
    a: >-
        Yes, but the battery's continuous output rating — not your panel's amperage — is usually the real ceiling. A 200A/240V panel can theoretically deliver 48 kW, far more than any residential battery stack produces. The limiting factor is the inverter: a single Tesla Powerwall 3 tops out at 11.5 kW continuous (22 kW peak), a single Generac PWRcell inverter around 9 kW, and a single Enphase IQ 5P module at 3.84 kW. To back up loads that exceed one unit's continuous rating — central AC plus a dryer running simultaneously, for example — you need multiple units or a load-management device that sheds non-critical circuits automatically.
  - q: How long will a home battery last during a multi-day PSEG-LI outage without sun?
    a: >-
        Run the math backward from your daily draw. A critical-loads panel pulling 3 kW continuously uses about 72 kWh over 24 hours if run flat-out, but real households cycle loads on and off and average closer to 15–20 kWh per day. A 20 kWh battery bank alone, with zero solar input, covers roughly one day of that average draw. Add even a partly cloudy day's solar production — often 20–40% of a clear-sky day in overcast nor'easter conditions — and the same 20 kWh bank can stretch through 2–3 days by topping off during daylight hours.
  - q: What does a properly sized whole-home battery system cost installed on Long Island?
    a: >-
        Expect $12,000–$16,000 installed for a single 10–13.5 kWh unit (Powerwall 3 or a two-module Enphase IQ 5P stack), $24,000–$34,000 for a 20–27 kWh mid-tier system (two Powerwalls, a four-to-five-module Enphase stack, or a three-battery Generac PWRcell), and $38,000–$55,000 for 30–40+ kWh true whole-home coverage including central AC. These figures include PSEG-LI interconnection paperwork and town permit fees, before the 30% federal tax credit and New York's 25% state credit reduce net cost substantially.
---

Sizing a whole-home battery for Long Island storm season is a math problem, not a guess: add up the watts your panel actually pulls, decide how many outage days you're protecting against, and match that to a battery stack's usable kWh and continuous output rating. Most Long Island homeowners land somewhere between a 10 kWh critical-loads unit and a 30–40 kWh whole-home bank, and the right number depends more on your appliances and outage tolerance than your square footage.

## Critical-Loads-Only vs Whole-Home: Two Different Sizing Problems

The first decision isn't a battery brand — it's which circuits you're protecting. A **critical-loads panel** typically carries the refrigerator (600–800W startup, 150–200W running), sump pump (2,000–3,000W startup surge, 800–1,300W running), furnace or boiler blower (300–600W), a lighting circuit, Wi-Fi and a router, and maybe a garage door opener. Add it up and most Long Island homes draw 2.5–4 kW continuous on critical loads alone, with surge spikes when the sump pump or furnace blower kicks on.

**Whole-home** coverage adds central air conditioning (3,500–6,000W running, 6,000–9,000W compressor startup surge for a 3–5 ton unit), an electric clothes dryer (4,500–5,500W), an electric range or oven (8,000–12,000W on high burners), a pool pump (1,500–2,500W), and a Level 2 EV charger if you have one (7,200W). Layer two or three of those on at once during a heat-wave outage and a 2,500 sq ft Colonial can pull 12,000–18,000W continuous with peaks well over 20,000W.

> A critical-loads panel and a whole-home panel aren't the same project with a bigger battery bolted on — they're different electrical scopes, often with different subpanels, and the sizing math starts from the load list, not the square footage.

For most Long Island storm-season planning, the honest question is: can you live without central AC and the oven for three days in a September hurricane, or is that a non-starter because of a medical device, an infant, or an elderly parent in the house? That answer decides which of the two problems you're solving.

There's a middle tier worth naming too: **partial whole-home**, where you keep one zone of central AC or a single window unit alive alongside the critical-loads list, but shed the dryer, oven, and pool pump. This is the most common real-world outcome for Long Island retrofits, because it lets a mid-size battery bank cover comfort-critical loads through a July or August hurricane-season outage without paying for full whole-home capacity that mostly protects a dryer you can live without for three days. A load-management device makes this tier possible without oversizing the battery to cover every circuit simultaneously.

## The Load Math: Watts, Amps, and What Your Panel Can Actually Push

Every battery has two numbers that matter more than total kWh: **continuous output** (what it can sustain) and **peak output** (what it can handle for a few seconds during motor startup). A Tesla Powerwall 3 delivers 11.5 kW continuous and 22 kW peak from a single unit — enough to run a whole-home critical-loads-plus-AC setup on its own for a typical 2,000 sq ft house. An Enphase IQ Battery 5P puts out 3.84 kW continuous per module; stacking four gets you 15.36 kW, but you're buying four units to get there. A single Generac PWRcell inverter is rated around 9 kW continuous.

This is why a 200A main panel — theoretically capable of 48 kW at 240V — is rarely the bottleneck. The battery's inverter is. If your whole-home load peaks at 18 kW when the AC compressor, dryer, and oven overlap, a single Powerwall 3's 22 kW peak might absorb the surge but its 11.5 kW continuous rating will trip a load-shedding response if all three run at once for more than a few seconds. That's where a load management device — a Span smart panel, Lumin controller, or the battery manufacturer's own smart-circuit modules — automatically drops non-critical circuits (like the dryer) so the AC and fridge stay up.

NEC 706 governs energy storage system installation — cell spacing, ventilation, disconnecting means, and labeling. NEC 705.12 covers how the battery's inverter output interconnects with your existing service. If you're running a dedicated critical-loads subpanel rather than whole-home backup, that's typically installed under NEC 702 (Optional Standby Systems) with its own transfer equipment. Every one of these installs in PSEG-LI territory also needs the utility's interconnection application, and in Huntington, a building permit through the **Town of Huntington Building Department** with inspection against NEC 706.15 panel labeling requirements. Nassau County towns and the **Town of Hempstead** have parallel permit processes.

The gateway or transfer equipment itself also has a rating that gets overlooked. Tesla's Gateway 3 is built to pass 200A of service, matching most Long Island homes, but a home with a 320A or 400A service (common on larger properties with a pool and a detached garage subpanel) needs a compatible whole-home load center or a second gateway, which adds cost and a longer permit review. Confirm your panel's amperage and whether it's been upsized since the house was built — a lot of 1970s-era Long Island Colonials still carry the original 150A service, which caps how much backup capacity you can add before an electrical service upgrade becomes part of the project.

## How Many Storm Days Are You Actually Sizing For

PSEG-LI's outage history sets the real planning horizon. Superstorm Sandy in 2012 left large parts of Nassau and Suffolk without power for 24 hours to as long as 18 days. A typical nor'easter knocks out power for 1–4 days; a direct hurricane hit can run longer depending on tree-related distribution damage, which remains one of PSEG-LI's most common outage causes on tree-lined residential streets.

Run the arithmetic from your own daily draw instead of an outage-length guess. A critical-loads panel averaging 3 kW continuous — cycling on and off rather than running flat-out — uses roughly 15–20 kWh over 24 hours in practice. A 20 kWh battery bank with zero solar assistance covers about one day of that average draw. The variable that changes everything is solar recharge: even in overcast nor'easter conditions, a 6–8 kW array typically still produces 20–40% of a clear-sky day's output. That's enough to meaningfully top off the battery during daylight hours and stretch a 20 kWh bank through 2–3 cloudy days instead of one.

For whole-home loads averaging 10–15 kWh per day (with AC running intermittently rather than continuously), the same math pushes total needed capacity to 30–40+ kWh if you want 2–3 days of coverage without leaning entirely on solar recharge. This is the core tradeoff: more kWh costs more up front, but under-sizing means the battery is dead by day two of exactly the storm you bought it for.

Worked example: a Huntington homeowner with a 6 kW solar array and a critical-loads panel draws 16 kWh on an average day. On a heavily overcast nor'easter day, that same 6 kW array might still produce 8–10 kWh instead of its clear-sky 25–30 kWh — not nothing, but not enough to fully offset daily draw. A 20 kWh battery starting at 100% state of charge, combined with 8 kWh of overcast solar production, covers roughly 1.5 days before running low; two such days back to back get you close to a 3-day outage without the battery ever hitting zero, provided draw stays disciplined (no one runs the dryer on generator habits). Add a third cloudy day or restore central AC to the load list, and you're into Tier 3 territory below.

## Battery Size Tiers and What They Actually Cost Installed

**Tier 1 — 10–13.5 kWh (single unit).** A Powerwall 3 or a two-module Enphase IQ 5P stack. Covers a critical-loads panel for 12–24+ hours without sun, longer with solar assist. Installed cost: $12,000–$16,000 before incentives. This is the right tier if you're protecting the fridge, sump pump, furnace, and some lighting through a typical nor'easter and don't need AC.

**Tier 2 — 20–27 kWh (mid-tier stack).** Two Powerwalls, a four-to-five-module Enphase stack, or a three-battery Generac PWRcell cabinet. Covers most of a whole-home load short of running central AC continuously, or stretches a critical-loads panel through 2–3 cloudy days. Installed cost: $24,000–$34,000 before incentives. FranklinWH's aPower units also compete in this tier with 13.6 kWh per unit, commonly installed in pairs.

**Tier 3 — 30–40+ kWh (true whole-home).** Three Powerwalls, three-plus FranklinWH units, or a six-battery-plus Generac PWRcell configuration. Sized to run central AC, the dryer, and the kitchen through a multi-day summer outage. Installed cost: $38,000–$55,000 before incentives.

All three tiers qualify for the 30% federal Investment Tax Credit under IRA Section 48 when charged primarily from solar, plus New York's 25% state solar tax credit (capped at $5,000) when installed alongside a new array. PSEG-LI's VDER tariff also credits these systems for grid services. The [full incentives breakdown](/incentives/) has current figures — they shift as NYSERDA program funding changes year to year. Net cost after both credits typically lands 30–35% below the installed price listed above.

Financing changes which tier makes sense in practice. A homeowner comparing a $16,000 single-unit system against a $34,000 mid-tier stack on a 10-year loan is really comparing roughly $150/month against roughly $320/month before incentives reduce the principal — a gap that often matters more than the raw kWh difference when a family is deciding how much backup capacity to buy. We walk through both the cash price and the financed monthly number during the load-audit conversation, because the "right" tier on paper isn't always the one that fits the household budget for the next decade.

## Sizing Your System the Right Way

The sizing mistake we see most often on Long Island isn't picking the wrong brand — it's skipping the load audit and buying a battery sized to a national-average household instead of the actual panel in front of us. Our [battery storage](/services/battery-storage/) team starts every quote with a load list from your panel schedule, not a square-footage rule of thumb, then matches that against how many storm days you want covered without leaning entirely on solar recharge.

If you're pairing storage with a new array, that load audit happens alongside the [residential solar installation](/services/residential-solar-installation/) site assessment, since your production capacity directly affects how many cloudy days a given battery bank can stretch through. [Our install process](/process/) walks through the PSEG-LI interconnection application and Town of Huntington permitting timeline once you've settled on a tier. And if you want to see how these sizing decisions played out on real Long Island homes through actual storms, the [Long Island install case studies](/case-studies/) page has before-and-after load data from systems we've installed in Nassau and Suffolk counties.
