---
title: "Честный Знак"
titleEn: "Honest Sign"
subtitle: "Unit-level DataMatrix marking and traceability, brought online on a live dairy production site."
summary: "Connecting existing packaging lines to Russia's national marking system — coders, vision cameras, low-voltage and server side, integrated and commissioned under running-plant constraints."
role: "Integration & commissioning"
scope: "OT/IT · vision · low-voltage · network"
site: "Operating dairy plant, Russia"
period: "2021–2022"
cover: "/cases/honest-sign/hero-coder-line.jpg"
tags: ["Marking & traceability", "Brownfield integration"]
order: 1
gallery:
  - { src: "/cases/honest-sign/process-commissioning.jpg", alt: "Commissioning the marking line on a live dairy floor", caption: "Commissioning the marking line on a live production floor.", group: "Process" }
  - { src: "/cases/honest-sign/process-weighing-stations.jpg", alt: "Weighing and labelling stations built into the plant", caption: "Weighing and labelling stations built into the plant.", group: "Process" }
  - { src: "/cases/honest-sign/process-cabinet-open.jpg", alt: "Inside the packaging-machine control cabinet", caption: "Inside the packaging-machine control cabinet.", group: "Process" }
  - { src: "/cases/honest-sign/process-plc-drive.jpg", alt: "PLC, drive and protection in the machine cabinet", caption: "PLC, drive and protection wired in the machine cabinet.", group: "Process" }
  - { src: "/cases/honest-sign/tech-camera-cognex-line.jpg", alt: "Cognex camera reading codes over the sour-cream line", caption: "Cognex camera reading codes over the sour-cream line.", group: "Vision & scanning" }
  - { src: "/cases/honest-sign/tech-camera-datalogic.jpg", alt: "Datalogic camera with illumination over the filling line", caption: "Datalogic camera and illumination over the filling line.", group: "Vision & scanning" }
  - { src: "/cases/honest-sign/tech-camera-cognex-lids.jpg", alt: "Cognex camera verifying DataMatrix on sour-cream lids", caption: "Cognex verifying DataMatrix on filled lids.", group: "Vision & scanning" }
  - { src: "/cases/honest-sign/tech-datamatrix-butter.jpg", alt: "DataMatrix and fork sensor on the butter line", caption: "Code, date and fork sensor on the butter line.", group: "DataMatrix on product" }
  - { src: "/cases/honest-sign/tech-datamatrix-kefir.jpg", alt: "DataMatrix printed inline on kefir film", caption: "DataMatrix printed inline on kefir film.", group: "DataMatrix on product" }
  - { src: "/cases/honest-sign/tech-cbx100-enclosure.jpg", alt: "Datalogic CBX100 and PSU in a field enclosure", caption: "Datalogic CBX100 + PSU in a field enclosure.", group: "Field power & network" }
  - { src: "/cases/honest-sign/tech-switch-plc.jpg", alt: "Network switch feeding the PLC control cabinet", caption: "Switch feeding the PLC cabinet (OT/IT).", group: "Field power & network" }
  - { src: "/cases/honest-sign/tech-dlink-ups.jpg", alt: "D-Link managed switch and UPS in a wall cabinet", caption: "D-Link DGS-1250-28X switch and UPS in a wall cabinet.", group: "Field power & network" }
  - { src: "/cases/honest-sign/tech-server-rack.jpg", alt: "Plant server rack with switching, server and UPS", caption: "Plant server rack: switching, server and UPS.", group: "Field power & network" }
  - { src: "/cases/honest-sign/result-marked-pouches.jpg", alt: "Marked milk pouches each carrying a unique DataMatrix", caption: "Marked milk pouches, each carrying a unique DataMatrix code.", group: "Result" }
  - { src: "/cases/honest-sign/result-handheld-scan.jpg", alt: "Handheld check shows code applied and scanned", caption: 'Handheld check: code "applied and scanned".', group: "Result" }
  - { src: "/cases/honest-sign/result-app-verified.jpg", alt: "Honest Sign app confirms the product as verified", caption: '«Честный Знак» app confirms the product — "Verified".', group: "Result" }
---

## Task

Russia's national marking system, «Честный Знак», requires unit-level traceability for dairy: every pack must carry a unique DataMatrix code that is printed, verified inline, and reported to the state system. The brief was to make this work on lines that were already in daily production.

The job connected existing packaging lines to the marking system end-to-end — mount and configure marking printers and applicators, install vision cameras to read each code, and tie coders, cameras, operator stations, network and server side into one chain that prints, validates and reports without stopping the line.

This was a brownfield environment — machines of mixed age and vendors, a food-grade wet floor, and no room for long downtime. New low-voltage power, field enclosures and structured cabling had to be run alongside live equipment, and the whole chain commissioned and debugged on the running line until code read rates held.

> Not a clean-room install — a working plant. The photographs are real field documentation, including the conditions the work was delivered in.

## What was done

- **Site survey.** Walked each line, mapped products and changeovers, chose mounting points for printers and cameras.
- **Marking hardware.** Mounted and configured thermal-transfer and TIJ coders and label applicators on the packaging machines.
- **Vision & scanning.** Installed and wired Datalogic / Cognex DataMatrix cameras, connection boxes and field sensors.
- **Power & cabinets.** Extended control cabinets, ran low-voltage power, PSUs and protection to each station.
- **Network & server.** Stood up switching, UPS and the server side; connected operator workstations and handhelds.
- **Commissioning.** Verified print and read quality, then debugged on the live line until code rates were stable.

## Technologies

- **Marking & equipment** — VideoJet DataFlex 6330 thermal-transfer coders, LetsMark TIJ (HP) printers, label applicators and Zebra label printers integrated onto the packaging machines.
- **Vision & scanning** — Datalogic and Cognex industrial DataMatrix cameras with CBX100 connection boxes, line sensors and handheld terminals for verification.
- **DataMatrix codes** — unique unit-level codes printed and read inline across milk, butter, sour cream and kefir; print quality and read rate tuned on the line.
- **Network & server** — managed switching (D-Link, Eltex), optical patching, APC / Ippon UPS and a server rack, tied to operator stations.

## Result

The marking system works on live production: codes are printed, read and verified inline, and the infrastructure ties the line, vision cameras, operator stations and server side into a single traceable chain — brought to a stable working state in field conditions.

From a printed code to a consumer scan that resolves in the national system, the full traceability loop is closed on a working dairy line.
