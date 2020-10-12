import { Injectable } from '@angular/core';
import { CommonService } from '../shared/services/common.service';
import { FishData } from '../models/fish';

const fishData: FishData[] = [
  {
    id: 113,
    fisheryManagement:
      '<ul>\n<li>There are two stocks of Atlantic cod in U.S. waters, the Gulf of Maine and Georges Bank stocks.</li>\n<li><a href="http://www.greateratlantic.fisheries.noaa.gov/sustainable/species/multispecies/">NOAA Fisheries</a> and the <a href="https://www.nefmc.org/">New England Fishery Management Council</a> manage Gulf of Maine cod. NOAA Fisheries and the New England Fishery Management Council collaborate with Canada to jointly manage Georges Bank cod, because the stock spans the international boundary.</li>\n<li>Atlantic cod, along with other groundfish in New England waters, are managed under the <a href="https://www.nefmc.org/management-plans/northeast-multispecies">Northeast Multispecies Fishery Management Plan</a>, which includes:\n<ul>\n<li>Permitting requirements for commercial vessels.</li>\n<li>Separate management measures for recreational vessels.</li>\n<li>Year-round and seasonal area closures to protect spawning fish and habitat.</li>\n<li>Minimum fish sizes to prevent harvest of juvenile fish.</li>\n<li>Annual catch limits, based on best available science.</li>\n<li>An optional sector (<a href="https://www.fisheries.noaa.gov/national/laws-and-policies/catch-shares">catch share</a>) program can be used for cod and other groundfish species. The sector program allows fishermen to form harvesting cooperatives and work together to decide when, where, and how they harvest fish.</li>\n</ul>\n</li>\n</ul>\n',
    habitat:
      '<ul>\n<li>Atlantic cod live near the ocean floor along rocky slopes and ledges.</li>\n<li>They prefer to live in cold water, at depths of around 30 to 500 feet, on bottoms with coarse sediments, rather than on finer mud and silt.</li>\n</ul>\n',
    habitatImpacts:
      'Area closures and gear restrictions protect habitat that are affected by some kinds of trawl gear.',
    imageGallery: null,
    location:
      '<ul>\n<li>In the Northwest Atlantic, cod range from Greenland to Cape Hatteras, North Carolina.</li>\n<li>In U.S. waters, cod is most common on Georges Bank and in the western Gulf of Maine.</li>\n</ul>\n',
    management: null,
    noaaFisheriesRegion: null,
    population:
      'Significantly below target population levels. Rebuilding plans are in place.',
    populationStatus:
      '<ul>\n<li>Gulf of Maine stock:\n<ul>\n<li>According to the <a href="https://www.nefsc.noaa.gov/saw/sasi/sasi_report_options.php" target="_blank">2019&nbsp;stock assessment</a><a href="https://www.nefsc.noaa.gov/saw/sasi/sasi_report_options.php">,</a> the Gulf of Maine stock is overfished and below the target biomass level.</li>\n<li>A new 10-year rebuilding plan was implemented for this stock in 2014 and the stock is targeted to rebuild by 2024.&nbsp; This is the second rebuilding plan for this stock.</li>\n</ul>\n</li>\n<li>Georges Bank stock:\n<ul>\n<li>According to the <a href="https://www.nefsc.noaa.gov/publications/crd/crd1311/" target="_blank">2013&nbsp;stock assessment</a>, the Georges Bank stock is overfished.</li>\n<li>The Georges Bank stock is scheduled to rebuild by 2027.</li>\n</ul>\n</li>\n<li>Both stocks are subject to overfishing. Fishing is still allowed, but at reduced levels.</li>\n<li>Historically, cod was so abundant off New England that early explorers named Cape Cod for the fish. Furthermore, Gloucester was established by a colonial charter issued to profit from cod fishing, and a painted “sacred cod” carved from pine has hung in the Massachusetts state house since 1784 as a symbol of prosperity.</li>\n<li>Due to high fishing pressure throughout the latter part of the 20th century, there are fewer fish in the U.S. stocks of Atlantic cod than the average for the past four decades.</li>\n<li>A primary source of rebuilding potential is the number of young fish coming into the population (recruitment). Over the past 20 years, recruitment has varied for the Gulf of Maine stock, and has been well below average for the Georges Bank stock.</li>\n</ul>\n',
    scientificName: 'Gadus morhua',
    speciesAliases:
      '<a href="/species-aliases/cod" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Cod</a>, <a href="/species-aliases/codling" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Codling</a>, <a href="/species-aliases/scrod-cod" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Scrod cod</a>, <a href="/species-aliases/markets" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Markets</a>, <a href="/species-aliases/steakers" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Steakers</a>',
    speciesIllustrationPhoto: {
      src: 'https://www.fishwatch.gov/sites/default/files/atlantic_cod.png',
      alt: '',
      title: '',
    },
    speciesName: 'Atlantic Cod',
    animalHealth: null,
    availability: '<p>Year-round.</p>\n',
    biology:
      '<ul>\n<li>Atlantic cod can live more than 20 years.</li>\n<li>They can grow up to 51 inches and 77 pounds.</li>\n<li>They are capable of reproducing at 2 to 3 years old, when they are between 12 and 16 inches long.</li>\n<li>Cod spawn near the ocean floor from winter to early spring.</li>\n<li>Larger females can produce 3 to 9 million eggs when they spawn.</li>\n<li>They are top predators in the bottom ocean community, feeding on a variety of invertebrates and fish.</li>\n</ul>\n',
    bycatch: 'Regulations and the use of modified fishing gear reduce bycatch.',
    calories: '82',
    carbohydrate: null,
    cholesterol: '43 mg',
    color: '',
    diseaseTreatmentandPrevention: null,
    diseasesinSalmon: null,
    displayedSeafoodProfileIllustration: null,
    ecosystemServices: null,
    environmentalConsiderations: null,
    environmentalEffects: null,
    farmingMethods: null,
    fatTotal: '0.67 g',
    feeds_: null,
    feeds: null,
    fiberTotalDietary: null,
    fishingRate: 'Reduced to end overfishing.',
    harvest:
      '<ul>\n<li>Commercial fishery:\n<ul>\n<li>In 2018, commercial landings of Atlantic cod totaled 2.15&nbsp;million pounds and were valued at more than $4.7&nbsp;million.</li>\n</ul>\n</li>\n<li>Gear types, habitat impacts, and bycatch:\n<ul>\n<li>Cod are commonly harvested using trawl nets, gillnets, bottom longlines, and rod and reel.</li>\n<li>Gillnets, longlines, and rod and reel used to harvest cod have little to no impact on habitat.</li>\n<li>Closed areas and gear restrictions reduce habitat impacts from trawl nets.</li>\n<li>Fishermen follow management measures designed to reduce interactions with marine mammals, including gear modifications, seasonal closures, and use of marine mammal deterrents.</li>\n</ul>\n</li>\n<li>Recreational fishery:\n<ul>\n<li>Cod are highly prized by recreational fishermen. They are commonly harvested by anglers using lures or bait. Fishing occurs year-round.</li>\n<li><a href="https://www.greateratlantic.fisheries.noaa.gov/sustainable/recfishing/regs/index.html">Regulations</a> include minimum fish sizes, possession limits, and closed seasons.</li>\n</ul>\n</li>\n</ul>\n',
    harvestType: null,
    healthBenefits: '',
    human_Health_: null,
    humanHealth: null,
    physicalDescription:
      '<ul>\n<li>Atlantic cod are heavy-bodied with a large head, blunt snout, and a distinct barbel (a whisker-like organ, like on a catfish) under the lower jaw.</li>\n<li>Their coloring varies, ranging from light yellowish-green to red and olive, usually with darker speckles on the head, fins, tail, and body. The belly is light colored and usually spotless. Individuals can change color readily.</li>\n<li>Cod have an obvious lateral line (the faint line that runs lengthwise down each side of the fish).</li>\n</ul>\n',
    production: null,
    protein: '17.81 g',
    quote:
      'Although populations are well below target levels, U.S. wild-caught Atlantic cod is still a smart seafood choice because it is sustainably managed under a rebuilding plan that allows limited harvest by U.S. fishermen.',
    quoteBackgroundColor: '#847852',
    research: null,
    saturatedFattyAcidsTotal: '0.131 g',
    selenium: '33.1 mcg',
    servingWeight: null,
    servings: '1',
    sodium: '54 mg',
    source: '<p>Wild-caught from Maine to Virginia.</p>\n',
    sugarsTotal: null,
    taste:
      '<p>Atlantic cod has a mild clean flavor. It is sweeter than Pacific cod.</p>\n',
    texture: '<p>Cod has large flakes. It is less firm than haddock.</p>\n',
    path: '/profiles/atlantic-cod',
    lastUpdate: '03/04/2020 - 13:16',
    href: 'https://line-ready-api.azurewebsites.net/fish/113',
    method: null,
    rel: null,
  },
  {
    id: 112,
    fisheryManagement:
      '<ul>\n<li><a href="https://sero.nmfs.noaa.gov/">NOAA Fisheries</a> and the <a href="http://www.gulfcouncil.org/">Gulf of Mexico Fishery Management Council</a>&nbsp;manage&nbsp;cobia in the Gulf of Mexico and on the east coast of Florida.</li>\n<li>The Atlantic migratory group cobia (from Georgia through New York) are managed by the <a href="http://www.asmfc.org/">Atlantic States Marine Fisheries Commission</a>.</li>\n<li>Managed under the&nbsp;<a href="https://gulfcouncil.org/fishery-management/implemented-plans/coastal-migratory-pelagics/">Fishery Management Plan for Coastal Migratory Pelagics in the Atlantic and Gulf of Mexico</a>:\n<ul>\n<li>Fishermen do not need a federal permit to harvest cobia.</li>\n<li>Gear restrictions:\n<ul>\n<li>Drift gillnets are prohibited.</li>\n<li>Authorized gear includes automatic reel, bandit gear, handline, rod-and-reel, and pelagic longline.</li>\n</ul>\n</li>\n<li>Cobia must be a minimum size to be harvested, and must be landed with their heads and fins intact.&nbsp;Current minimum size limit is 33 inches fork length. &nbsp;Amendment 7 will be increasing the minimum size limit to 36 inches fork length.</li>\n<li>Commercial and recreational fishermen have size limits, trip limits, and per person per day or per vessel per day bag limits.</li>\n<li>Annual catch limits based on best available science.</li>\n</ul>\n</li>\n</ul>\n',
    habitat:
      '<ul>\n<li>Cobia are found near structures in the water (buoys, debris, shipwrecks, and artificial reefs) or large animals (sharks, turtles, and stingrays).</li>\n<li>Adult cobia travel alone or in small groups.</li>\n</ul>\n',
    habitatImpacts:
      'Fishing gear used to catch cobia rarely contacts the ocean floor and has minimal impacts on habitat.',
    imageGallery: null,
    location:
      '<ul>\n<li>In U.S. waters, cobia are most abundant from Virginia south through the Gulf of Mexico.</li>\n<li>Cobia migrate seasonally in the Atlantic and Gulf of Mexico.</li>\n<li>Along the Atlantic coast, they move south and offshore toward warmer waters during the late fall and winter.</li>\n<li>Cobia found in the northeastern Gulf of Mexico during the summer move to south Florida waters in the winter, possibly spending the winter near the Florida Keys.</li>\n</ul>\n',
    management: null,
    noaaFisheriesRegion: null,
    population: 'Above target population level.',
    populationStatus:
      '<ul>\n<li>According to the 2013 stock assessment the&nbsp;<a href="http://sedarweb.org/sedar-28-stock-assessment-report-gulf-mexico-cobia" target="_blank">Gulf of Mexico stock</a> is not overfished and not subject to overfishing.</li>\n<li>In the Gulf of Mexico, the cobia population nearly doubled from the early 1980s to 2000.&nbsp;</li>\n<li>The 2013 stock assessment determined that there are two separate migratory stocks, the Gulf of Mexico and east Florida stock (Texas through the entire east coast of Florida) and Atlantic stock (Georgia north through the Mid-Atlantic area).</li>\n<li>Scientists from NOAA\'s Southeast Fisheries Science Center monitor the abundance of the population, and scientists, managers, and stakeholders assess the status of the stock through the&nbsp;<a href="http://sedarweb.org">Southeast Data, Assessment, and Review (SEDAR) process</a>.</li>\n</ul>\n',
    scientificName: 'Rachycentron canadum',
    speciesAliases:
      '<a href="/species-aliases/crabeater" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Crabeater</a>, <a href="/species-aliases/sergeantfish" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Sergeantfish</a>, <a href="/species-aliases/ling" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Ling</a>, <a href="/species-aliases/cabio" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Cabio</a>, <a href="/species-aliases/cubby-yew" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Cubby yew</a>, <a href="/species-aliases/lemonfish" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Lemonfish</a>',
    speciesIllustrationPhoto: {
      src: 'https://www.fishwatch.gov/sites/default/files/cobia.png',
      alt: '',
      title: '',
    },
    speciesName: 'Cobia',
    animalHealth: null,
    availability: '<p>Year-round.</p>\n',
    biology:
      '<ul>\n<li>Cobia are the only member of the family Rachycentridae in North America.</li>\n<li>They grow up to 6 feet and 100 pounds and live up to 12 years.</li>\n<li>They are able to reproduce when they are young—females mature at age 3 and males mature at age 2.</li>\n<li>Cobia spawn in coastal bays and estuaries several times throughout their spawning season, which lasts from late June to mid-August in the Southeast and from late summer to early fall in the Gulf of Mexico. Females release between 375,000 and 2 million eggs each time they spawn.</li>\n<li>They are strong, aggressive predators, mainly feeding on crustaceans but also fish and squid. Larger pelagic fish prey on young cobia.</li>\n</ul>\n',
    bycatch: 'Minimal, as commercial fishermen rarely target cobia.',
    calories: '87',
    carbohydrate: null,
    cholesterol: '40 mg',
    color:
      '<p>Raw cobia meat is light tan and turns snowy-white when cooked.</p>\n',
    diseaseTreatmentandPrevention: null,
    diseasesinSalmon: null,
    displayedSeafoodProfileIllustration: null,
    ecosystemServices: null,
    environmentalConsiderations: null,
    environmentalEffects: null,
    farmingMethods: null,
    fatTotal: '0.64 g',
    feeds_: null,
    feeds: null,
    fiberTotalDietary: null,
    fishingRate: 'At recommended level in the Gulf of Mexico. ',
    harvest:
      '<ul>\n<li>Commercial fishery:\n<ul>\n<li>In 2018, commercial landings of cobia totaled 45,800 pounds in the Gulf of Mexico and were valued at $160,980.</li>\n<li>Commercial fishermen do not directly target cobia and usually catch it while trawling for shrimp or fishing for other species such as mackerel.</li>\n</ul>\n</li>\n<li>Recreational fishery:\n<ul>\n<li>Recreational fishermen like cobia because it is a large, powerful fish that puts up a good fight and provides a tasty meal.</li>\n<li>Recreational landings make up approximately 96&nbsp;percent of total landings. In 2018, recreational harvest totaled 3,476,650 pounds in the Gulf of Mexico.</li>\n</ul>\n</li>\n</ul>\n',
    harvestType: null,
    healthBenefits:
      '<p>Cobia is a good source of low-fat protein. It is high in riboflavin, niacin, vitamin B6, magnesium, and potassium.</p>\n',
    human_Health_: null,
    humanHealth: null,
    physicalDescription:
      '<ul>\n<li>Cobia are dark brown with a single dorsal fin.</li>\n<li>Young cobia have distinct coloring, with alternating black and white horizontal stripes and splotches of bronze, orange, and green.</li>\n<li>Cobia are often mistaken for sharks or remoras. In fact, their closest living relative is the remora (shark sucker).</li>\n</ul>\n',
    production: null,
    protein: '18.99 g',
    quote:
      // tslint:disable-next-line: max-line-length
      'U.S. wild-caught cobia is a smart seafood choice because it is sustainably managed and responsibly harvested under U.S. regulations.',
    quoteBackgroundColor: '#452f21',
    research: null,
    saturatedFattyAcidsTotal: '0.12 g',
    selenium: '36.5 mcg',
    servingWeight: null,
    servings: '1',
    sodium: '135 mg',
    source:
      '<p>Wild-caught from Virginia to Texas. Cobia is farmed, and <a href="https://www.fishwatch.gov/aquaculture">aquaculture</a>-produced cobia is becoming increasingly available in U.S. fish markets.</p>\n',
    sugarsTotal: null,
    taste: '<p>Cobia has a sweet, rich flavor.</p>\n',
    texture: '<p>Cobia is lean, moist, and firm with a nice flake.</p>\n',
    path: '/profiles/cobia',
    lastUpdate: '03/04/2020 - 13:30',
    href: 'https://line-ready-api.azurewebsites.net/fish/112',
    method: null,
    rel: null,
  },
  {
    id: 111,
    fisheryManagement:
      '<ul>\n<li><a href="http://sero.nmfs.noaa.gov/" target="_blank">NOAA Fisheries</a> and the <a href="http://www.safmc.net/" target="_blank">South Atlantic Fishery Management Council</a> (in cooperation with the <a href="http://www.mafmc.org/" target="_blank">Mid-Atlantic</a> and <a href="http://www.nefmc.org/" target="_blank">New England</a> Fishery Management Councils) manage the Atlantic stock&nbsp;of Mahimahi.</li>\n<li>Managed under the <a href="http://www.safmc.net/Library/Dolphin-Wahoo">Fishery Management Plan for the Dolphin and Wahoo Fishery of the Atlantic</a>:\n<ul>\n<li>Permits are required to sell mahimahi.</li>\n<li>Minimum size limit for mahimahi caught off the coasts of Georgia, Florida, and South Carolina to protect smaller fish.</li>\n</ul>\n</li>\n</ul>\n',
    habitat:
      '<ul>\n<li>Mahimahi live near the surface in tropical and subtropical waters.</li>\n<li>Juveniles swim together in schools.</li>\n<li>Older fish are usually found alone.</li>\n<li>Larger males prefer open ocean habitat.</li>\n<li>Females and smaller males are commonly found near natural and artificial floating objects, including floating brown algae called&nbsp;<em>Sargassum</em>&nbsp;(in the Atlantic and the Caribbean).</li>\n</ul>\n',
    habitatImpacts:
      'Fishing gear used to catch mahimahi rarely contacts the ocean floor and has minimal impacts on habitat.',
    imageGallery: null,
    location:
      '<ul>\n<li>Mahimahi are found in the Atlantic, Gulf of Mexico, and Caribbean, and are caught from Massachusetts to Texas.</li>\n<li>About one-third of U.S. commercial harvest of mahimahi comes from the Atlantic, Gulf of Mexico, and Caribbean. The rest comes from the <a href="https://www.fishwatch.gov/profiles/pacific-mahimahi">Pacific</a>, mainly Hawaii.</li>\n</ul>\n',
    management: null,
    noaaFisheriesRegion: null,
    population: 'Above target population levels.',
    populationStatus:
      '<ul>\n<li>Scientists assume populations are abundant because they are highly productive and widely distributed throughout tropical/subtropical oceans.</li>\n<li>Scientists conducted an exploratory assessment of mahimahi in 2000 and determined that the stock was not overfished, but they have not conducted a formal stock assessment.</li>\n<li>Atlantic mahimahi is not subject to overfishing.</li>\n</ul>\n',
    scientificName: 'Coryphaena hippurus',
    speciesAliases:
      '<a href="/species-aliases/dolphinfish" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Dolphinfish</a>, <a href="/species-aliases/dolphin" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Dolphin</a>, <a href="/species-aliases/dorado" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Dorado</a>',
    speciesIllustrationPhoto: {
      src:
        'https://www.fishwatch.gov/sites/default/files/atlantic_mahimahi_dolphinfish_0.png',
      alt: '',
      title: '',
    },
    speciesName: 'Atlantic Mahimahi',
    animalHealth: null,
    availability: '<p>Year-round.</p>\n',
    biology:
      '<ul>\n<li>Atlantic mahimahi grow up to almost 7 feet and 88 pounds.</li>\n<li>They live up to 5 years.</li>\n<li>They are capable of reproducing at 4 to 5 months old.</li>\n<li>Believed to spawn every 2 to 3 days during the spawning season, releasing between 33,000 and 66,000 eggs each time.</li>\n<li>In the Atlantic, spawn under patches of floating brown algae called&nbsp;<em>Sargassum</em>.</li>\n<li>Mahimahi are top predators that feed in surface water during the day.</li>\n<li>They eat a wide variety of species, including small pelagic fish, juvenile tuna, invertebrates, billfish, jacks, pompano, and pelagic larvae of nearshore, bottom-living species.</li>\n<li>Predators include large tuna, marine mammals, marlin, sailfish, and swordfish.</li>\n<li>NOAA Fisheries</li>\n</ul>\n',
    bycatch: 'Regulations are in place to minimize bycatch.',
    calories: '85',
    carbohydrate: null,
    cholesterol: '73 mg',
    color:
      '<p>The raw flesh is pinkish to grayish-white, although the flesh along the lateral line is dark. When cooked, the meat is off-white.</p>\n',
    diseaseTreatmentandPrevention: null,
    diseasesinSalmon: null,
    displayedSeafoodProfileIllustration: null,
    ecosystemServices: null,
    environmentalConsiderations: null,
    environmentalEffects: null,
    farmingMethods: null,
    fatTotal: '0.7 g',
    feeds_: null,
    feeds: null,
    fiberTotalDietary: null,
    fishingRate: 'At recommended levels.',
    harvest:
      '<ul>\n<li>Commercial fishery:\n<ul>\n<li>In 2017, commercial fishermen harvested more than 603,400 pounds of mahimahi in the Atlantic (primarily from Florida and North Carolina) valued at $2&nbsp;million, and about 3,400 pounds in the Gulf of Mexico (primarily from Florida) valued at more than $5,400.</li>\n</ul>\n</li>\n<li>Gear types, habitat impacts, and bycatch:\n<ul>\n<li>Hook-and-line gear (including handlines and longlines) is used for commercial harvest.</li>\n<li>Hook-and-line gear has minimal impact on habitat because it does not contact the ocean floor.</li>\n<li>Longlines can incidentally catch sea turtles, marine mammals, and other species.</li>\n<li>Longline fishermen follow measures to prevent bycatch and protect other species. These include using specific gear and safe handling techniques to reduce impacts on sea turtles, as well as not fishing in certain areas to protect species such as billfish.</li>\n</ul>\n</li>\n<li>Recreational fishery:\n<ul>\n<li>The mahimahi fishery in the Atlantic, Caribbean, and Gulf of Mexico has historically been recreational.</li>\n<li>In 2017, recreational fishermen harvested more than 13.3&nbsp;million pounds of mahimahi in the Atlantic, the majority of which was caught in the South Atlantic and Caribbean, and about 65,000 pounds in the Gulf of Mexico.</li>\n</ul>\n</li>\n</ul>\n',
    harvestType: null,
    healthBenefits:
      '<p>Low in saturated fat and a good source of vitamin B12, phosphorus, and potassium.</p>\n',
    human_Health_: null,
    humanHealth: null,
    physicalDescription:
      '<ul>\n<li>Brightly colored back is an electric greenish blue, lower body is gold or sparkling silver, and sides have a mixture of dark and light spots.</li>\n<li>Bright pattern fades almost immediately after mahimahi is harvested.</li>\n<li>Adult males have a square head.</li>\n<li>Females have a rounded head.</li>\n<li>Distinguished from the pompano dolphin by its 55 to 66 dorsal fin rays and a very wide, square tooth patch on the tongue.</li>\n</ul>\n',
    production: null,
    protein: '18.5 g',
    quote:
      'U.S. wild-caught mahimahi is a smart seafood choice because it is sustainably managed and responsibly harvested under U.S. regulations.',
    quoteBackgroundColor: '#83a54b',
    research: null,
    saturatedFattyAcidsTotal: '0.188 g',
    selenium: '36.5 mcg',
    servingWeight: null,
    servings: '1',
    sodium: '88 mg',
    source: '<p>Wild-caught from Massachusetts to Texas.</p>\n',
    sugarsTotal: null,
    taste:
      '<p>Mahimahi has a sweet, mild flavor. For a milder flavor, trim away darker portions of the meat.</p>\n',
    texture:
      '<p>Mahimahi is lean and fairly firm with large, moist flakes.</p>\n',
    path: '/profiles/atlantic-mahimahi',
    lastUpdate: '06/29/2020 - 13:52',
    href: 'https://line-ready-api.azurewebsites.net/fish/111',
    method: null,
    rel: null,
  },
  {
    id: 110,
    fisheryManagement:
      '<ul>\n<li><a href="https://www.greateratlantic.fisheries.noaa.gov/sustainable/species/monkfish/" target="_blank">NOAA Fisheries</a> and the <a href="http://www.nefmc.org/" target="_blank">New England</a> and <a href="http://www.mafmc.org" target="_blank">Mid-Atlantic Fishery Management Councils</a> manage the monkfish fishery.</li>\n<li>The New England Fishery Management Council has the lead for developing measures in the monkfish fishery management plan.</li>\n<li>Managed under the&nbsp;<a href="http://www.nefmc.org/management-plans/monkfish" target="_blank">Monkfish Fishery Management Plan</a>:\n<ul>\n<li>The monkfish fishery in U.S. waters is divided into <a href="http://www.greateratlantic.fisheries.noaa.gov/educational_resources/gis/data/shapefiles/Monkfish_Fishery_Management_Areas/Monkfish_Fishery_Management_Areas_MAP.pdf" target="_blank">two management areas</a> north and south of Georges Bank to accommodate differences in monkfish fishing practices.</li>\n<li>Both areas are managed under the same plan.</li>\n<li>The Northern Fishery Management Area covers the Gulf of Maine and the northern part of Georges Bank. The Southern Fishery Management Area extends from the southern flank of Georges Bank through the Mid-Atlantic Bight to North Carolina.</li>\n<li>Management measures include annual catch limits, limited access permits, size limits, landing limits, and measures to reduce bycatch and impacts on habitat.</li>\n</ul>\n</li>\n</ul>\n',
    habitat:
      '<ul>\n<li>Monkfish live on the ocean floor, typically on sand, mud, and shell <a href="http://www.nefsc.noaa.gov/nefsc/publications/tm/tm127/index.htm" target="_blank">habitats</a>.</li>\n<li>Adults spend most of their time on the bottom, often in a depression or partially covered in sediment. They also spend some time off the bottom, probably riding currents to help with migration.</li>\n</ul>\n',
    habitatImpacts:
      'Area closures and gear restrictions protect habitat affected by some kinds of trawl gear.',
    imageGallery: null,
    location:
      '<ul>\n<li>Monkfish are found in the Northwest Atlantic Ocean from the Grand Banks and northern Gulf of St. Lawrence south to Cape Hatteras, North Carolina.</li>\n<li>They can tolerate a wide range of temperatures and depths, from inshore waters down to nearly 3,000 feet.</li>\n<li>Monkfish migrate seasonally to spawn and feed.</li>\n</ul>\n',
    management: null,
    noaaFisheriesRegion: null,
    population: 'Above target population levels.',
    populationStatus:
      '<ul>\n<li>According to the <a href="https://www.nefsc.noaa.gov/saw/reviews_report_options.php">2013 stock assessment</a>, monkfish are not overfished and are not subject to overfishing in both the northern and southern areas.</li>\n</ul>\n',
    scientificName: 'Lophius americanus',
    speciesAliases:
      '<a href="/species-aliases/goosefish" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Goosefish</a>, <a href="/species-aliases/monktails" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Monktails</a>, <a href="/species-aliases/angler" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Angler</a>, <a href="/species-aliases/fishing-frog" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Fishing frog</a>, <a href="/species-aliases/allmouth" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Allmouth</a>, <a href="/species-aliases/molligut" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Molligut</a>, <a href="/species-aliases/abbot" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Abbot</a>, <a href="/species-aliases/sea-devil" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Sea-devil</a>, <a href="/species-aliases/lotte" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Lotte</a>',
    speciesIllustrationPhoto: {
      src: 'https://www.fishwatch.gov/sites/default/files/monkfish.png',
      alt: '',
      title: '',
    },
    speciesName: 'Monkfish',
    animalHealth: null,
    availability:
      '<p>Year-round, with peaks in the late fall and spring.</p>\n',
    biology:
      '<ul>\n<li>Female monkfish grow larger and live longer than male monkfish. Females live to at least 13 years and grow to more than 4½ feet long, while males only live about 7 years and grow to almost 3 feet long.</li>\n<li>Males and females are able to reproduce when they reach about 14 inches and 16 inches long, respectively.</li>\n<li>Monkfish spawn from February to October.</li>\n<li>Females release large egg veils that can contain more than 1 million eggs.</li>\n<li>These egg veils float near the surface along with the prevailing currents for 1 to 3 weeks (depending on temperature) until the veil disintegrates and the larvae hatch.</li>\n<li>Monkfish migrate seasonally to spawn and feed.</li>\n<li>They travel by slowly swimming or by using the sturdy base of their pectoral fins to walk.</li>\n<li>Scientists speculate that their wing-like pectoral fins may be used to ride currents.</li>\n<li>Monkfish are opportunistic feeders, eating whatever prey is most available at the time.</li>\n<li>Larvae feed on zooplankton (tiny floating animals). Juveniles mostly eat small fish, shrimp, and squid.</li>\n<li>Adults mainly eat fish, including other monkfish, but also feed on crustaceans, mollusks, seabirds, and diving ducks.</li>\n<li>Monkfish ambush their prey—they use a modified spine on their head as a fishing pole and bait to lure small fish toward their mouths.</li>\n<li>When the prey comes near, the monkfish takes a large gulp, which sucks the prey into its mouth and traps it behind rows of back-pointing teeth.</li>\n<li>Large monkfish have few predators.</li>\n<li>Predacious fish such as swordfish, sharks, and thorny skate prey on small monkfish.</li>\n</ul>\n',
    bycatch:
      'Regulations limit possession of bycatch species and require modified fishing gear to reduce bycatch.',
    calories: '76',
    carbohydrate: null,
    cholesterol: '25 mg',
    color: '',
    diseaseTreatmentandPrevention: null,
    diseasesinSalmon: null,
    displayedSeafoodProfileIllustration: null,
    ecosystemServices: null,
    environmentalConsiderations: null,
    environmentalEffects: null,
    farmingMethods: null,
    fatTotal: '1.52 g',
    feeds_: null,
    feeds: null,
    fiberTotalDietary: null,
    fishingRate: 'At recommended levels.',
    harvest:
      '<ul>\n<li>Commercial fishery:\n<ul>\n<li>In 2018, commercial landings of monkfish totaled approximately 22.9&nbsp;million pounds and were valued at approximately $14.8&nbsp;million.</li>\n<li>Monkfish is one of the highest valued finfish in the Northeast.</li>\n<li>Almost all of the monkfish for sale in the United States comes from U.S. fisheries.</li>\n</ul>\n</li>\n<li>Gear types, habitat impacts, and bycatch:\n<ul>\n<li>Fishermen harvest monkfish using bottom trawls, sink gillnets, and scallop dredges.</li>\n<li>Most monkfish caught in the Northern Fishery Management Area are caught by vessels using bottom-trawl gear targeting groundfish.</li>\n<li>Most monkfish caught in the Southern Fishery Management area are caught by vessels using gillnets.</li>\n<li>Although bottom trawls can affect marine habitat, most bottom trawls catch monkfish over sand and mud habitats, which tend to recover from any disturbance more quickly than more structured habitats.&nbsp;</li>\n<li>Managers and researchers believe that monkfish essential fish habitat is only minimally vulnerable to the effects of bottom trawls and sink gillnet gear.</li>\n<li>Managers have implemented a variety of measures to protect habitat of other bottom-dwelling fish from any potential impacts from the monkfish fishery:\n<ul>\n<li>Two areas are closed to monkfish fishing (all gears) year-round to protect sensitive habitat.</li>\n<li>Fishermen must use gear with specific requirements that prevent them from fishing in sensitive hard bottom areas.</li>\n</ul>\n</li>\n<li>Monkfish fisheries sometimes incidentally catch <a href="https://www.fishwatch.gov/profiles/atlantic-spiny-dogfish">spiny dogfish</a> and <a href="https://www.fishwatch.gov/profiles/winter-skate">skates</a>, which fishermen are allowed to keep as long as they have the appropriate federal permits and comply with the appropriate regulations for these fisheries.</li>\n<li>There is a limit on the amount of bycatch of other fish species allowed in the monkfish fishery, including possession and landing limits and annual quotas specified in fisheries for those species.</li>\n<li>Mesh on gillnets and trawl nets must be larger than the established minimum size to reduce bycatch.</li>\n<li>Gillnets used to target monkfish can incidentally capture protected species, such as sea turtles, <a href="http://www.greateratlantic.fisheries.noaa.gov/Protected/whaletrp/">large whales (right, humpback, and fin whales)</a>, <a href="https://www.greateratlantic.fisheries.noaa.gov/protected/porptrp/">harbor porpoise</a>, dolphins, and <a href="http://www.greateratlantic.fisheries.noaa.gov/protected/atlsturgeon/">Atlantic sturgeon</a>.</li>\n<li>Monkfish fishermen follow a number of measures to reduce the fishery’s potential impact on protected species:\n<ul>\n<li>In the Mid-Atlantic, management measures prohibit gillnet vessels from using large mesh (7 inches or greater) gillnets in some areas during certain times of the year to protect migrating sea turtles.</li>\n<li>Closures are timed based on projected sea surface temperatures in fishing areas, as sea turtles are known to migrate into these areas when temperatures are about 52 degrees Fahrenheit or higher.</li>\n<li>The closures move large-mesh gillnetting north in advance of sea turtles migrating into fishing areas and, along with other precautions, have greatly reduced incidental catch of sea turtles in the monkfish fishery.</li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>\n',
    harvestType: null,
    healthBenefits:
      '<p>Low in sodium; a good source of niacin, vitamins B6 and B12, and potassium; and a very good source of protein, phosphorus, and selenium.</p>\n',
    human_Health_: null,
    humanHealth: null,
    physicalDescription:
      '<ul>\n<li>Monkfish have mottled dark brown to olive-green skin on top and whitish skin underneath.</li>\n<li>They are described as tadpole-like in appearance, with a body that is mostly a broad head with a large mouth and a narrow, tapering body.</li>\n</ul>\n',
    production: null,
    protein: '14.48 g',
    quote:
      'U.S. wild-caught monkfish is a smart seafood choice because it is sustainably managed and responsibly harvested under U.S. regulations.',
    quoteBackgroundColor: '#684627',
    research: null,
    saturatedFattyAcidsTotal: '0.34 g',
    selenium: '36.5 mcg',
    servingWeight: null,
    servings: '1',
    sodium: '18 mg',
    source: '<p>U.S. wild-caught from Maine to North Carolina.</p>\n',
    sugarsTotal: null,
    taste: '<p>Mild.</p>\n',
    texture:
      '<p>The tail meat is firm, dense, and relatively boneless. The meat is not flaky and has a texture similar to lobster meat. Raw monkfish is covered with a blue-gray membrane, which should be removed before cooking. If left on, the membrane will shrink, and the meat will curl and become tough.</p>\n',
    path: '/profiles/monkfish',
    lastUpdate: '04/23/2020 - 16:25',
    href: 'https://line-ready-api.azurewebsites.net/fish/110',
    method: null,
    rel: null,
  },
  {
    id: 109,
    fisheryManagement:
      '<ul>\n<li><a href="https://www.fisheries.noaa.gov/region/alaska">NOAA Fisheries</a> and the <a href="https://www.npfmc.org/">North Pacific Fishery Management Council</a> manage the Alaska pollock fishery.</li>\n<li>Managed under the Groundfish Fishery Management Plans for the <a href="https://www.fisheries.noaa.gov/management-plan/groundfish-gulf-alaska-management-plan">Gulf of Alaska</a> and the <a href="https://www.fisheries.noaa.gov/management-plan/groundfish-bering-sea-and-aleutian-islands-management-plan">Bering Sea/Aleutian Islands</a>:&nbsp;\n<ul>\n<li>The Alaska pollock fishery is a great example of how <a href="https://www.afsc.noaa.gov/refm/cbs/convention_description.htm">science-based management</a> and monitoring can help ensure the long-term sustainability of the resource.</li>\n<li>The Bering Sea fishery&nbsp;is one of the first U.S. fisheries to be managed with <a href="https://www.fisheries.noaa.gov/national/laws-and-policies/catch-shares">catch shares</a> and is often considered one of the best-managed fisheries in the world.</li>\n</ul>\n</li>\n</ul>\n',
    habitat:
      '<ul>\n<li>Younger pollock live in the mid-water region of the ocean; older pollock (age 5 and up) typically dwell near the ocean floor.</li>\n<li>Pollock swim in large schools in waters between 330 and 985 feet deep but are sometimes found as deep as 3,300 feet. &nbsp;</li>\n</ul>\n',
    habitatImpacts:
      'The Alaska pollock fishery uses midwater trawl nets that, although sometimes making contact with the bottom, have minimal impact on habitat.',
    imageGallery: null,
    location:
      '<ul>\n<li>Alaska pollock are found throughout the North Pacific Ocean but are most common in the Bering Sea.</li>\n</ul>\n',
    management: null,
    noaaFisheriesRegion: null,
    population:
      'Above target population levels for the Aleutian Islands, Eastern Bering Sea, and Western/Central/West Yakutat Gulf of Alaska stocks. The population levels are unknown for Bogoslof and Southeast Gulf of Alaska.',
    populationStatus:
      '<ul>\n<li>The 2018&nbsp;stock assessments for the <a href="https://www.fisheries.noaa.gov/resource/data/2018-assessment-pollock-stock-aleutian-islands">Aleutian Islands</a>, <a href="https://www.fisheries.noaa.gov/resource/data/2018-assessment-walleye-pollock-stock-eastern-bering-sea">Eastern Bering Sea</a>, and <a href="https://www.fisheries.noaa.gov/resource/data/2018-assessment-walleye-pollock-stock-gulf-alaska">Western/Central/West Yakutat Gulf of Alaska</a> indicate that pollock stocks are not overfished and spawning biomass is estimated to be above the target level for all three stocks.</li>\n<li>To assess the health of the pollock population, scientists estimate the female spawning biomass—a measure of the pollock stock’s ability to reproduce.</li>\n<li>Regulations for the pollock fishery aim to conserve the spawning population to ensure pollock can successfully reproduce and keep the population size at healthy levels.</li>\n<li>The overfished status for the <a href="https://www.fisheries.noaa.gov/resource/data/2018-assessment-walleye-pollock-bogoslof-island-region">Bogoslof</a> and <a href="https://www.fisheries.noaa.gov/resource/data/2018-assessment-walleye-pollock-stock-gulf-alaska">Southeast Gulf of Alaska</a> stocks is unknown. These areas are also closed to fishing for pollock with trawl gear.</li>\n<li>No stocks are currently subject to overfishing.</li>\n</ul>\n<p>&nbsp;</p>\n',
    scientificName: 'Gadus chalcogrammus',
    speciesAliases:
      '<a href="/species-aliases/pollock" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Pollock</a>, <a href="/species-aliases/walleye-pollock" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Walleye pollock</a>, <a href="/species-aliases/pacific-pollock" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Pacific pollock</a>',
    speciesIllustrationPhoto: {
      src: 'https://www.fishwatch.gov/sites/default/files/alaska_pollock.png',
      alt: '',
      title: '',
    },
    speciesName: 'Alaska Pollock',
    animalHealth: null,
    availability:
      '<p>Fresh from January to April and June to October. Frozen year-round.</p>\n',
    biology:
      '<ul>\n<li>Alaska pollock grow fast and have a relatively short life span of about 12 years.</li>\n<li>As a result, they are generally more productive compared to slower growing, longer living species.</li>\n<li>Some pollock begin to reproduce by the age of 3 or 4 and are extremely fertile, so each generation replaces aging or harvested fish in just a few years.</li>\n<li>In the spring, pollock migrate inshore to shallow water to breed and feed.</li>\n<li>They move back to warmer, deeper waters in the winter months.</li>\n<li>The survival of young pollock depends on several factors, such as the availability of food, environmental conditions, and predation.</li>\n<li>Their survival rate is highly variable, which can potentially cause large fluctuations in the abundance of pollock in a matter of a few years.</li>\n<li>Juvenile pollock eat zooplankton (tiny floating animals) and small fish.</li>\n<li>Older pollock feed on other fish, including juvenile pollock.</li>\n<li>Many other species—including Steller sea lions and other marine mammals, fish, and seabirds—feed on pollock and rely on them for survival.</li>\n</ul>\n',
    bycatch:
      'The Alaska pollock fishery is one of the cleanest in terms of incidental catch of other species (less than 1 percent).',
    calories: '81',
    carbohydrate: null,
    cholesterol: '71 mg',
    color: '',
    diseaseTreatmentandPrevention: null,
    diseasesinSalmon: null,
    displayedSeafoodProfileIllustration: null,
    ecosystemServices: null,
    environmentalConsiderations: null,
    environmentalEffects: null,
    farmingMethods: null,
    fatTotal: '0.8 g',
    feeds_: null,
    feeds: null,
    fiberTotalDietary: null,
    fishingRate: 'At recommended levels.',
    harvest:
      '<ul>\n<li>Commercial fishery:\n<ul>\n<li>The Alaska pollock fishery is one of the most valuable in the world.</li>\n<li>In 2018, commercial landings of Alaska pollock from the Bering Sea and Gulf of Alaska totaled more than 3.36&nbsp;billion pounds and were valued at more than $490.8&nbsp;million.</li>\n<li>In 2017, products made from pollock were valued at more than $1 billion. A quarter of pollock products are surimi (imitation crab), almost one-fifth is roe (eggs), and close to half are fillets.</li>\n<li>The majority of the U.S. catch of pollock comes from the Bering Sea.</li>\n</ul>\n</li>\n<li>Gear types, habitat impacts, and bycatch:\n<ul>\n<li>In the United States, pollock are caught by trawlers that tow a large cone-shaped net through the mid-water.</li>\n<li>Less than 1 percent of the total catch in the Alaska pollock fishery&nbsp;is made up of other species.</li>\n<li>Bycatch of Pacific salmon is a particular concern because of its importance to commercial and subsistence fisheries. The relative impact of the pollock fishery on critical salmon runs has been estimated to be relatively low, especially since 2007.</li>\n<li>100 percent of pollock fishing boats&nbsp;in the Bering Sea carry scientifically trained observers. &nbsp;They carefully monitor and count all Pacific salmon caught incidentally in the pollock nets. These salmon have never been allowed to be landed or sold by the pollock fishery but, when feasible, they are donated to local Alaska food banks.</li>\n<li>The <a href="https://www.npfmc.org/">North Pacific Fishery Management Council</a> implemented measures in 2011 to increase incentives for fishermen to further reduce Chinook salmon bycatch.</li>\n<li>The pollock industry has developed several innovative approaches to meet these new requirements, including using NOAA Fisheries Observer program data to close salmon bycatch hotspots to fishing on a weekly basis and testing a new salmon excluder device for trawl nets.</li>\n<li>\n<p>The Council improved the management of Chinook and chum salmon bycatch in the Bering Sea by creating a comprehensive salmon bycatch avoidance program in 2016, and continues to examine additional measures to minimize salmon bycatch.</p>\n</li>\n</ul>\n</li>\n</ul>\n',
    harvestType: null,
    healthBenefits:
      '<p>Alaska pollock is a good source of omega-3 fatty acids, high in protein, and low in carbohydrates and fat.</p>\n',
    human_Health_: null,
    humanHealth: null,
    physicalDescription:
      '<ul>\n<li>Pollock is a member of the cod family.</li>\n<li>They can grow as long as 3 feet but typically reach lengths between 12 and 20 inches and weigh between 1 and 3 pounds.</li>\n<li>They have speckled coloring that helps them blend in with the seafloor to avoid predators.</li>\n</ul>\n',
    production: null,
    protein: '17.18 g',
    quote:
      'U.S. wild-caught Alaska pollock is a smart seafood choice because it is sustainably managed and responsibly harvested under U.S. regulations.',
    quoteBackgroundColor: '#746867',
    research: null,
    saturatedFattyAcidsTotal: '0.164 g',
    selenium: '21.9 mcg',
    servingWeight: null,
    servings: '1',
    sodium: '99 mg',
    source:
      '<p>U.S. wild-caught, mainly in the Bering Sea and Gulf of Alaska.</p>\n',
    sugarsTotal: null,
    taste:
      '<p>Pollock has mild-tasting flesh and is similar to other white fish like cod or haddock.</p>\n',
    texture:
      '<p>Pollock has a relatively fine texture and is well suited for a variety of preparations.</p>\n',
    path: '/profiles/alaska-pollock',
    lastUpdate: '04/28/2020 - 11:24',
    href: 'https://line-ready-api.azurewebsites.net/fish/109',
    method: null,
    rel: null,
  },
  {
    id: 108,
    fisheryManagement:
      '<ul>\n<li><a href="https://www.fisheries.noaa.gov/region/alaska">NOAA Fisheries</a> and the <a href="https://www.npfmc.org/">North Pacific Fishery Management Council</a> manage the sablefish fishery in Alaska.</li>\n<li>Managed under the <a href="https://www.fisheries.noaa.gov/management-plan/groundfish-gulf-alaska-management-plan">Gulf of Alaska</a>&nbsp;and&nbsp;<a href="https://www.fisheries.noaa.gov/management-plan/groundfish-bering-sea-and-aleutian-islands-management-plan">Bering Sea/Aleutian Islands Groundfish Fishery Management Plans</a>:\n<ul>\n<li>Fishing season runs from approximately March 1 to November 15 (subject to change each year).</li>\n<li>Fixed gear (longlines and pots) harvests 90 percent of annual quota and trawl gear harvests about 10 percent.</li>\n<li>The majority of fixed gear is managed with an <a href="https://www.fisheries.noaa.gov/alaska/commercial-fishing/pacific-halibut-and-sablefish-individual-fishing-quota-ifq-program">individual fishing quota</a> (<a href="https://www.fisheries.noaa.gov/national/laws-and-policies/catch-shares">catch shares</a>) program.</li>\n</ul>\n</li>\n<li>The State of Alaska manages fisheries in state waters under a shared quota system and also manages separate state fisheries.</li>\n<li><a href="https://www.westcoast.fisheries.noaa.gov/">NOAA Fisheries</a> and the <a href="https://www.pcouncil.org/">Pacific Fishery Management Council</a> manage the sablefish fishery on the West Coast.</li>\n<li>Managed under the <a href="https://www.pcouncil.org/groundfish/fishery-management-plan/" target="_blank">Pacific Coast Groundfish Fishery Management Plan</a>:\n<ul>\n<li>Coast-wide catch limits among different fishing groups and gear types.</li>\n<li>Daily trip limits for some vessels.</li>\n<li>Individual fishing quota (<a href="https://www.fisheries.noaa.gov/national/laws-and-policies/catch-shares">catch shares</a>) for the trawl fishery and some of the fixed gear fishery. The West Coast groundfish trawl fishery is managed under a <a href="https://www.nwfsc.noaa.gov/research/divisions/fram/catch_shares.cfm">trawl rationalization catch share program</a>.</li>\n<li>Full observer coverage in the trawl fishery, partial coverage in the fixed gear fishery.</li>\n</ul>\n</li>\n</ul>\n',
    habitat:
      '<ul>\n<li>Adults live on mud bottoms in waters deeper than 650 feet.</li>\n<li>Juveniles live throughout the water column in nearshore waters.</li>\n</ul>\n',
    habitatImpacts:
      'The trawl, longline, and pot gear used to harvest sablefish have minimal or temporary effects on habitat.',
    imageGallery: null,
    location:
      '<ul>\n<li>Sablefish are found in the northeastern Pacific Ocean from northern Mexico to the Gulf of Alaska, westward to the Aleutian Islands and into the Bering Sea.</li>\n<li>There are two populations in the Pacific Ocean:\n<ul>\n<li>Northern population inhabits Alaska and northern British Columbia waters.</li>\n<li>Southern population inhabits southern British Columbia, Washington, Oregon, and California waters.</li>\n<li>Both populations mix off southwest Vancouver Island and northwest Washington.</li>\n</ul>\n</li>\n<li>They are most commonly found in Alaska waters.</li>\n</ul>\n',
    management: null,
    noaaFisheriesRegion: null,
    population:
      'Alaska sablefish are below target level and Pacific coast sablefish are near target level. Fishing rates promote population growth.',
    populationStatus:
      '<ul>\n<li>According to the <a href="http://www.pcouncil.org/wp-content/uploads/2015/05/D8_Att8_Sablefish_2015_Update_ExecSummary_JUN2015BB.pdf">2015 stock assessment</a>, the West Coast sablefish stock is not overfished and is not subject to overfishing based on <a href="https://www.nwfsc.noaa.gov/research/divisions/fram/observation/data_products/species_management.cfm">2018&nbsp;catch data</a>.</li>\n<li>According to the <a href="https://www.fisheries.noaa.gov/resource/data/2018-assessment-sablefish-stock-alaska">2018&nbsp;stock assessment</a>, the Eastern Bering Sea/Aleutian Islands/Gulf of Alaska sablefish stock is not overfished and is not subject to overfishing.</li>\n</ul>\n',
    scientificName: 'Anoplopoma fimbria',
    speciesAliases:
      '<a href="/species-aliases/black-cod" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Black cod</a>, <a href="/species-aliases/butterfish" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Butterfish</a>, <a href="/species-aliases/skil" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Skil</a>, <a href="/species-aliases/beshow" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Beshow</a>, <a href="/species-aliases/coalfish" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Coalfish</a>',
    speciesIllustrationPhoto: {
      src: 'https://www.fishwatch.gov/sites/default/files/sablefish.png',
      alt: '',
      title: '',
    },
    speciesName: 'Sablefish',
    animalHealth: null,
    availability: '<p>Year-round.</p>\n',
    biology:
      '<ul>\n<li>Females can grow more than 3 feet in length.</li>\n<li>Females are able to reproduce at 6 ½ years old and more than 2 feet in length.</li>\n<li>Males are able to reproduce at age 5 and 1.9 feet in length.</li>\n<li>Sablefish spawn in deeper water along the continental slope from January to April in Alaska waters, and from January to March between California and British Columbia.</li>\n<li>Eggs develop in deep water for about 2 weeks until they hatch, then rise to the surface.</li>\n<li>Hatched larvae are moved by surface currents.</li>\n<li>Off southeast Alaska and British Columbia, juveniles appear in nearshore waters by fall.</li>\n<li>Juveniles have been found to migrate more than 2,000 miles in 6 or 7 years.</li>\n<li>Sablefish can live to be more than 90 years old.</li>\n</ul>\n',
    bycatch:
      'Regulations limit the amount of incidentally caught and discarded fish in the Alaska fishery. The catch shares program on the West Coast creates incentives to reduce bycatch.',
    calories: '195',
    carbohydrate: null,
    cholesterol: '49 mg',
    color: '',
    diseaseTreatmentandPrevention: null,
    diseasesinSalmon: null,
    displayedSeafoodProfileIllustration: null,
    ecosystemServices: null,
    environmentalConsiderations: null,
    environmentalEffects: null,
    farmingMethods: null,
    fatTotal: '15.3 g',
    feeds_: null,
    feeds: null,
    fiberTotalDietary: null,
    fishingRate: 'At recommended levels.',
    harvest:
      '<ul>\n<li>Commercial fishery:\n<ul>\n<li>In 2018, commerical harvest of sablefish totaled more than 38.6&nbsp;million pounds and were valued at more than $111&nbsp;million.</li>\n<li>Sablefish are the highest valued finfish per pound in Alaska and West Coast commercial fisheries because of their rich oil content.</li>\n</ul>\n</li>\n<li>Gear, habitat impacts, and bycatch:\n<ul>\n<li>Longlines are used to harvest the majority of sablefish in Alaska.</li>\n<li>Increased catch efficiency, because of <a href="https://www.fisheries.noaa.gov/alaska/commercial-fishing/pacific-halibut-and-sablefish-individual-fishing-quota-ifq-program" target="_blank">individual fishing quotas</a>, reduces the number of hooks deployed and effects on bottom habitat.</li>\n<li>Individual fishing quotas reduce bycatch by allowing fishermen to operate at a slower pace and providing incentives to fish efficiently.</li>\n<li>Pot fishing has increased in the Bering Sea and Aleutian Islands, and the Gulf of Alaska, in response to killer whale interactions with fishing.</li>\n<li>West Coast fishermen harvest sablefish with trawls, longlines, and pots.</li>\n</ul>\n</li>\n<li>Recreational fishery:\n<ul>\n<li>Sablefish are occasionally caught in Alaska recreational fisheries during their summer migrations onto the continental shelf.</li>\n</ul>\n</li>\n</ul>\n',
    harvestType: null,
    healthBenefits:
      '<p>Very high in long-chain omega-3 fatty acids, EPA, and DHA.</p>\n',
    human_Health_: null,
    humanHealth: null,
    physicalDescription:
      '<ul>\n<li>Sablefish look much like cod. They are often referred to as black cod, even though they are not actually part of the cod family.</li>\n</ul>\n',
    production: null,
    protein: '13.41 g',
    quote:
      'U.S. wild-caught sablefish is a smart seafood choice because it is sustainably managed and responsibly harvested under U.S. regulations.',
    quoteBackgroundColor: '#686963',
    research: null,
    saturatedFattyAcidsTotal: '3.201 g',
    selenium: '36.5 mcg',
    servingWeight: null,
    servings: '1',
    sodium: '56 mg',
    source:
      '<p>Wild-caught off Alaska, Washington, Oregon, and California.</p>\n',
    sugarsTotal: null,
    taste:
      '<p>Sablefish have high oil content, making them exceptionally flavorful. They are often called butterfish because of their melt-in-your-mouth, oil-rich meat. Sablefish has a short shelf life and must be handled carefully.</p>\n',
    texture:
      '<p>Sablefish have soft, velvety texture. Their meat has large, white flakes.</p>\n',
    path: '/profiles/sablefish',
    lastUpdate: '03/19/2020 - 16:47',
    href: 'https://line-ready-api.azurewebsites.net/fish/108',
    method: null,
    rel: null,
  },
  {
    id: 107,
    fisheryManagement:
      '<ul>\n<li><a href="http://www.adfg.alaska.gov/index.cfm?adfg=CommercialByFisherySalmon.main" rel="external" target="_blank">Alaska Department of Fish and Game</a>, <a href="https://www.fisheries.noaa.gov/region/alaska">NOAA Fisheries</a>, and the <a href="https://www.npfmc.org/">North Pacific Fishery Management Council</a> manage sockeye salmon in Alaska.</li>\n<li>Managed under the <a href="https://www.fisheries.noaa.gov/management-plan/alaska-salmon-fisheries-management-plan" target="_blank">Fishery Management Plan (FMP) for Salmon Fisheries in the EEZ off the Coast of Alaska</a>.\n<ul>\n<li>All management of the salmon fisheries in federal waters is delegated to the State of Alaska and the <a href="http://www.adfg.alaska.gov/index.cfm?adfg=CommercialByFisherySalmon.main" rel="external" target="_blank">Department of Fish and Game</a>. This allows management to remain consistent throughout salmon’s range.\n<ul>\n<li>Managers regulate the fishery based on <a href="http://www.adfg.alaska.gov/FedAidPDFs/FMS14-07.pdf" rel="external">escapement goals</a> to ensure harvests are sustainable. They want enough salmon to be able to escape the fishery and return to fresh water to spawn and replenish the population.</li>\n<li>Salmon fishery management largely relies on in-season assessment of how many salmon return to fresh water to spawn.</li>\n<li>Managers set harvest levels based on these returns. When abundance is high and the number of fish returning is much higher than that needed to meet escapement goals, harvest levels are set higher.</li>\n</ul>\n</li>\n<li>During the fishing season, scientists monitor catch and escapement, comparing current returns with those from previous years to keep an eye on abundance and actively manage the fishery.</li>\n</ul>\n</li>\n<li>Off the West Coast and in Alaska, the <a href="https://www.psc.org/about_treaty.htm" rel="external" target="_blank">Pacific Salmon Treaty</a>, the <a href="https://www.psc.org/" rel="external" target="_blank">Pacific Salmon Commission</a>, and the <a href="https://npafc.org/" rel="external" target="_blank">North Pacific Anadromous Fish Commission</a> help coordinate management, research, and enhancement of shared U.S. and international salmon stocks, including sockeye.</li>\n</ul>\n',
    habitat:
      '<ul>\n<li>Freshwater lakes, streams, estuaries, and associated wetlands provide vital nursery grounds for sockeye salmon.</li>\n<li>Anadromous sockeye migrate from fresh water habitats to the ocean to further grow, feed, and mature.</li>\n<li>Adult salmon leave the ocean, enter fresh water, and migrate many miles upstream to spawn, usually in the stream or lake of their birth.</li>\n<li>Some sockeye salmon are not anadromous and spend their entire lives in freshwater.</li>\n<li>&nbsp;In the Pacific Northwest, non-anadromous sockeye are known as "kokanee."</li>\n</ul>\n',
    habitatImpacts:
      'Fishing gear used to catch sockeye salmon rarely contacts the ocean floor and has little impact on habitat.',
    imageGallery: null,
    location:
      '<ul>\n<li>Northwest Alaska to the Deschutes River in Oregon.</li>\n</ul>\n',
    management: null,
    noaaFisheriesRegion: null,
    population:
      'There are hundreds of sockeye salmon stocks in Alaska and several Pacific stocks. Some stocks are above target population levels, while others are below.',
    populationStatus:
      '<ul>\n<li>Alaska:\n<ul>\n<li>There are hundreds of stocks of sockeye salmon in Alaska.</li>\n<li>Some stocks are in decline, while others are steady or increasing.</li>\n<li>None are listed under the <a href="https://www.fisheries.noaa.gov/topic/laws-policies#endangered-species-act" target="_blank">Endangered Species Act (ESA)</a>.</li>\n<li><a href="https://www.pcouncil.org/documents/2020/04/2020-preseason-report-iii.pdf/" rel="external">Review of Salmon Escapement Goals in Southeast Alaska, 2019</a>.</li>\n</ul>\n</li>\n<li>West Coast:\n<ul>\n<li>As of 2019, <a href="https://www.fisheries.noaa.gov/species/sockeye-salmon-protected" rel="external">one population of sockeye salmon is listed as endangered and one is listed as threatened</a> under the ESA.</li>\n<li><a href="https://www.pcouncil.org/documents/2020/04/2020-preseason-report-iii.pdf/">Review of 2019&nbsp;Ocean Salmon Fisheries</a>.</li>\n</ul>\n</li>\n<li>Populations are affected by:\n<ul>\n<li>Changes in ocean and climatic conditions.</li>\n<li>Habitat loss from dam construction and urban development.</li>\n<li>Degraded water quality from agricultural and logging practices.</li>\n</ul>\n</li>\n<li>Population conservation efforts include:\n<ul>\n<li>Captive-rearing in hatcheries.</li>\n<li>Removal and modification of dams that obstruct salmon migration.</li>\n<li>Restoration of degraded habitat.</li>\n<li>Acquisition of key habitat.</li>\n<li>Improvements to water quality and instream flow.</li>\n</ul>\n</li>\n<li>The <a href="https://www.westcoast.fisheries.noaa.gov/protected_species/salmon_steelhead/recovery_planning_and_implementation/pacific_coastal_salmon_recovery_fund.html" target="_blank">Pacific Coastal Salmon Recovery Fund</a> supports the restoration of salmon species.</li>\n</ul>\n',
    scientificName: 'Oncorhynchus nerka',
    speciesAliases:
      '<a href="/species-aliases/red-salmon" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Red salmon</a>, <a href="/species-aliases/blueback-salmon" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Blueback salmon</a>, <a href="/species-aliases/redfish" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Redfish</a>, <a href="/species-aliases/summer-sockeye" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Summer Sockeye</a>',
    speciesIllustrationPhoto: {
      src: 'https://www.fishwatch.gov/sites/default/files/sockeye_salmon.png',
      alt: '',
      title: '',
    },
    speciesName: 'Sockeye Salmon',
    animalHealth: null,
    availability:
      '<p>Fresh summer and early fall. Frozen, canned, and smoked year-round.</p>\n',
    biology:
      '<ul>\n<li>Most sockeye salmon are anadromous—they hatch in freshwater streams and rivers or lakes and generally rear in freshwater lakes for 1 to 3 years, after which they reach the smolt stage and migrate to the ocean to feed and grow.</li>\n<li>They typically mature and return to fresh water after 2 to 3 years at sea, but some return earlier or stay at sea longer, between 4 and 5 years.</li>\n<li>Sockeye salmon that return earlier are almost always males and are called "jacks."</li>\n<li>They typically spawn in the summer or fall.</li>\n<li>Females select spawning sites, dig nests (redds) with their tails, and deposit eggs (between 2,000 and 4,500) in the redds.</li>\n<li>Males swim over the redds and fertilize the eggs.</li>\n<li>Females cover their eggs with gravel using their tails.</li>\n<li>The eggs hatch during the winter, and the newly hatched salmon (alevins) remain in the gravel, living off the material stored in their yolk sacs until early spring.</li>\n<li>They then emerge as fry and spend 1 to 3 years in fresh water before reaching the smolt stage and migrating out to the ocean, usually in the spring.</li>\n<li>All sockeye salmon die within a few weeks after spawning.</li>\n<li>They sexually mature around the age of 5, which means their lifespan is about 5 years, although some live longer. Age 4 is more common in the Pacific Northwest.</li>\n<li>While in fresh water, juvenile sockeye salmon feed mainly on zooplankton (tiny floating animals), amphipods (small, shrimp-like crustaceans), and insects.</li>\n<li>In the ocean, sockeye salmon continue to feed on zooplankton but also eat larval and small adult fishes and occasionally squid.</li>\n<li>Fish (including other salmon) and birds feed on juvenile salmon.</li>\n<li>Sharks, lampreys, and marine mammals prey on adult salmon in the ocean. Bears, eagles, and occasionally wolves feed on sockeye salmon in fresh water.</li>\n<li>After salmon spawn and die, <a href="http://www.adfg.alaska.gov/index.cfm?adfg=wildlifenews.view_article&amp;articles_id=97&amp;issue_id=21" rel="external">salmon carcasses</a> are a valuable source of energy and nutrients to the river ecosystem. Carcasses have been shown to improve newly hatched salmon growth and survival by contributing nitrogen and phosphorous compounds to streams.</li>\n</ul>\n',
    bycatch: 'Regulations are in place to minimize bycatch.',
    calories: '168',
    carbohydrate: null,
    cholesterol: '62 mg',
    color:
      '<p>Reddest flesh of the wild salmon species. The raw meat has a bright-red or orange-red color. Cooked meat remains red.</p>\n',
    diseaseTreatmentandPrevention: null,
    diseasesinSalmon: null,
    displayedSeafoodProfileIllustration: null,
    ecosystemServices: null,
    environmentalConsiderations: null,
    environmentalEffects: null,
    farmingMethods: null,
    fatTotal: '8.56 g',
    feeds_: null,
    feeds: null,
    fiberTotalDietary: null,
    fishingRate:
      'Managers set fishing rates to avoid jeopardizing the survival and recovery of sockeye salmon stocks that are below their target levels.',
    harvest:
      '<ul>\n<li>Commercial fishery:\n<ul>\n<li>In 2018, commercial landings of sockeye salmon totaled more than 265.3 million pounds and were valued at more than $351.5 million.</li>\n<li>Almost all the sockeye salmon harvested in the United States comes from Alaska fisheries. Sockeye salmon are also harvested off the West Coast, mainly Washington, with a small amount harvested in Oregon.</li>\n<li>Sockeye salmon remain the preferred species for canning due to the rich orange-red color of their flesh.</li>\n<li>More than half of the U.S. sockeye salmon catch is sold fresh or frozen rather than canned.</li>\n</ul>\n</li>\n<li>Gear types, habitat impacts, and bycatch:\n<ul>\n<li>Primarily harvested commercially in <a href="http://www.adfg.alaska.gov/static/fishing/PDFs/commercial/whatkindofboat_cf.pdf" rel="external" target="_blank">net fisheries</a>, including gillnet purse seines and, more rarely, reef nets.</li>\n<li>Gillnetters catch salmon by setting curtain-like nets perpendicular to the sockeyes’ trajectory as they migrate along the coast toward fresh water. The mesh openings on the nets are just large enough to allow males (which are usually larger) to get stuck, or gilled, in the mesh.</li>\n<li>Purse seiners catch salmon by encircling them with a long net and drawing the bottom closed to capture the fish.</li>\n<li>Sockeye salmon are also caught in commercial troll fisheries for Chinook and coho salmon.</li>\n<li>Fishing gear used to catch sockeye salmon rarely contacts the ocean floor and has little impact on habitat.</li>\n<li>Bycatch is low and usually consists of other salmon species.</li>\n</ul>\n</li>\n<li>Recreational fishery:\n<ul>\n<li>Sockeye salmon are a favorite catch of recreational fishermen.</li>\n<li>To ensure recreational fisheries are sustainable, West Coast anglers are only allowed to keep a certain amount of salmon per fishing trip.</li>\n<li>In Alaska, regulations vary by area and individual fishery.</li>\n<li>Recreational fisheries in high-use areas (Cook Inlet, Southeast Alaska, Copper River) are regulated through management plans that allocate fish between commercial and recreational fishermen.</li>\n</ul>\n</li>\n<li>Subsistence fishery:\n<ul>\n<li>Salmon is an important source of spiritual and physical sustenance for Western Indian tribes and Alaska natives, and salmon are culturally important to many other residents of these areas.</li>\n<li>Subsistence fishermen use a variety of fishing gear to harvest sockeye salmon.</li>\n</ul>\n</li>\n</ul>\n',
    harvestType: null,
    healthBenefits:
      '<p>Sockeye salmon is low in sodium and is a good source of omega-3 fatty acids.</p>\n',
    human_Health_: null,
    humanHealth: null,
    physicalDescription:
      '<ul>\n<li>Sockeye is one of the smaller species of Pacific salmon, measuring 1.5 to 2.5 feet in length and weighing 4 to 15 pounds.</li>\n<li>Kokanee (non-anadromous sockeye) rarely exceed 1.2 feet in length.</li>\n<li>Sea-going sockeye salmon have iridescent silver flanks, a white belly, and a metallic green-blue top, giving them their "blueback" name.</li>\n<li>Some fine black speckling may occur on the back, but the large spots typical of other Pacific salmon are absent. There are no spots on the fins, including the tail.</li>\n<li>As sockeye salmon return to their freshwater spawning grounds, their heads turn green and their bodies turn bright red, hence their other common name in Alaska is “red” salmon.</li>\n<li>Spawning males develop a humped back and hooked jaws filled with tiny, visible teeth.</li>\n</ul>\n',
    production: null,
    protein: '21.3 g',
    quote:
      'U.S. wild-caught sockeye salmon is a smart seafood choice because it is sustainably managed and responsibly harvested under U.S. regulations.',
    quoteBackgroundColor: '#676e81',
    research: null,
    saturatedFattyAcidsTotal: '1.495 g',
    selenium: '33.7 mcg',
    servingWeight: null,
    servings: '1',
    sodium: '47 mg',
    source: '<p>Alaska to Oregon.</p>\n',
    sugarsTotal: null,
    taste:
      '<p>Rich flavor that rivals the flavor of Chinook (king) salmon.</p>\n',
    texture: '<p>Firm and fatty, making it rich in omega-3 fatty acids.</p>\n',
    path: '/profiles/sockeye-salmon',
    lastUpdate: '05/05/2020 - 08:48',
    href: 'https://line-ready-api.azurewebsites.net/fish/107',
    method: null,
    rel: null,
  },
  {
    id: 106,
    fisheryManagement:
      '<ul>\n<li><a href="https://www.fisheries.noaa.gov/region/southeast">NOAA Fisheries</a> with the <a href="http://gulfcouncil.org/">Gulf of Mexico</a> and <a href="http://safmc.net/">South Atlantic</a> Fishery Management Councils manage red snapper in the United States.</li>\n<li>In the Gulf of Mexico, managed under the <a href="https://www.fisheries.noaa.gov/management-plan/gulf-mexico-reef-fish-fishery-management-plan">Fishery Management Plan for the Reef Fish Resources of the Gulf of Mexico</a>:\n<ul>\n<li>A rebuilding plan was implemented in 2005&nbsp;with the goal of rebuilding the Gulf of Mexico red snapper stock by 2032.</li>\n<li>Annual catch limits for the commercial and recreational fisheries.</li>\n<li>Commercial fishermen must have a permit to harvest red snapper. Through the individual fishing quota (<a href="https://www.fisheries.noaa.gov/national/laws-and-policies/catch-shares">catch shares</a>) program, they may harvest their quotas whenever they choose and must report how much they harvest.</li>\n<li>A minimum size limit protects the spawning stock and juveniles.</li>\n<li>For more information, visit <a href="https://www.fisheries.noaa.gov/southeast/sustainable-fisheries/gulf-mexico-recreational-red-snapper-management">NOAA Fisheries Southeast Regional Office’s Gulf of Mexico Red Snapper Management</a> website.</li>\n</ul>\n</li>\n<li>In the South Atlantic, managed under the <a href="https://www.fisheries.noaa.gov/management-plan/south-atlantic-snapper-grouper-fishery-management-plan">Fishery Management Plan for the Snapper-Grouper Fishery of the South Atlantic Region</a>:\n<ul>\n<li>A rebuilding plan was implemented in 2010 with the goal of rebuilding the South Atlantic red snapper stock by 2044. It allows for limited harvest of red snapper as the population continues to grow.&nbsp;</li>\n<li>In 2010 and 2011, regulations prohibited harvest of red snapper in the South Atlantic to protect the population from too much fishing pressure and to allow the number of fish to increase.</li>\n<li>Limited harvest was allowed in 2012-2014. Harvest was prohibited in 2015 and 2016.</li>\n<li>For more information, visit the <a href="http://safmc.net/regulations/regulations-by-species/red-snapper/">South Atlantic Fishery Management Council’s Red Snapper Regulations</a> website or <a href="https://www.fisheries.noaa.gov/management-plan/south-atlantic-snapper-grouper-fishery-management-plan">NOAA Fisheries Southeast Regional Office’s South Atlantic Snapper-Grouper Management</a> page.</li>\n</ul>\n</li>\n<li>State management consistency with federal management\n<ul>\n<li>In the Gulf of Mexico, recreational state management measures are very different from recreational federal management measures.</li>\n<li>In the South Atlantic, state management measures are fairly consistent with the federal management measures noted above. Some states, such as South Carolina and Georgia, automatically adopt federal regulations while others have separate regulations.</li>\n</ul>\n</li>\n</ul>\n',
    habitat:
      '<ul>\n<li>Larval red snapper swim freely within the water column.</li>\n<li>Juveniles live in shallow waters over sandy or muddy bottom habitat.</li>\n<li>Adults live on the bottom, usually near hard structures on the continental shelf that have moderate to high relief (for example, coral reefs, artificial reefs, rocks, ledges, and caves), sloping soft-bottom areas, and limestone deposits.</li>\n</ul>\n',
    habitatImpacts:
      'Fishing gear used to harvest red snapper has minimal impacts on habitat.',
    imageGallery: null,
    location:
      '<ul>\n<li>Red snapper are generally found at 30 to 620 feet deep in the Gulf of Mexico and along the eastern coasts of North America, Central America, and northern South America.</li>\n<li>They are rare north of the Carolinas.</li>\n</ul>\n',
    management: null,
    noaaFisheriesRegion: null,
    population:
      'Below target level in the Gulf of Mexico and fishing rate promotes population growth. Significantly below target population levels in the South Atlantic. Rebuilding plans are in place.',
    populationStatus:
      '<ul>\n<li>\n<p>According to the <a href="http://sedarweb.org/sedar-52">2018&nbsp;stock assessment of Gulf of Mexico red snapper</a> the stock is not overfished.&nbsp;The stock is rebuilding and a rebuilding plan is in place. Regulations are in place to ensure that the combined commercial and recreational catches are low enough to prevent overfishing.</p>\n</li>\n<li>\n<p>According to the <a href="http://sedarweb.org/sedar-41">2016 stock assessment of South Atlantic red snapper</a>, the stock is overfished and subject to overfishing. The stock is rebuilding and a rebuilding plan is in place. The overfishing determination was based on fishing mortality rates from 2012-2014 when fishing was occurring on the stock, and harvest was prohibited in the South Atlantic in 2015 and 2016. Spawning biomass has generally been increasing since the mid-1990s, but continues to be well below the target level (currently at 22 percent). It will take time for older, more fertile fish to rebuild; however, the numbers of red snapper predicted by the assessment are the highest on record since the 1970s.</p>\n</li>\n</ul>\n',
    scientificName: 'Lutjanus campechanus',
    speciesAliases:
      '<a href="/species-aliases/snapper" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Snapper</a>, <a href="/species-aliases/genuine-red-snapper" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Genuine red snapper</a>, <a href="/species-aliases/american-reds" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">American reds</a>, <a href="/species-aliases/spot-snapper" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Spot snapper</a>',
    speciesIllustrationPhoto: {
      src: 'https://www.fishwatch.gov/sites/default/files/red_snapper.png',
      alt: '',
      title: '',
    },
    speciesName: 'Red Snapper',
    animalHealth: null,
    availability:
      '<p>U.S. wild-caught red snapper is available fresh year-round.</p>\n',
    biology:
      '<ul>\n<li>Red snapper grow at a moderate rate, and may reach 40 inches long and 50 pounds.</li>\n<li>They can live a long time—red snapper as old as 57 years have been reported in the Gulf of Mexico and as old as 51 years in the South Atlantic.</li>\n<li>Females are able to reproduce as early as age 2.</li>\n<li>Males and females spawn from May to October, depending on their location.</li>\n<li>Red snapper feed on fish, shrimp, crab, worms, cephalopods (octopus or squid), and some plankton (tiny floating plants and animals).</li>\n<li>Young red snapper are food for the large carnivorous fish that share their habitat, such as jacks, groupers, sharks, barracudas, and morays.</li>\n<li>Large marine mammals and turtles also eat snapper.</li>\n</ul>\n',
    bycatch:
      'Regulations require modified fishing gear to reduce bycatch. Release techniques improve the chance of survival of unintentionally caught fish.',
    calories: '100',
    carbohydrate: null,
    cholesterol: '37 mg',
    color:
      '<p>The meat is pinkish with yellow tones when raw and turns somewhat lighter when cooked. Red snapper have trademark red skin and red eyes and come from domestic fisheries. To aid in identification, they are usually sold with the skin on.</p>\n',
    diseaseTreatmentandPrevention: null,
    diseasesinSalmon: null,
    displayedSeafoodProfileIllustration: null,
    ecosystemServices: null,
    environmentalConsiderations: null,
    environmentalEffects: null,
    farmingMethods: null,
    fatTotal: '1.34 g',
    feeds_: null,
    feeds: null,
    fiberTotalDietary: null,
    fishingRate:
      'At recommended level in the Gulf of Mexico. Reduced to end overfishing in the South Atlantic.',
    harvest:
      '<ul>\n<li>Commercial fishery:\n<ul>\n<li>In the Gulf of Mexico in 2016, commercial landings of red snapper totaled approximately 6.5 million pounds and were valued at more than $26&nbsp;million.</li>\n<li><span>In the South Atlantic, the commercial sector was closed in 2010-2011 and 2015-2016.</span></li>\n</ul>\n</li>\n<li>Gear types, habitat impacts, and bycatch:\n<ul>\n<li>Commercial fishermen mainly use hook-and-line gear (handlines and electric reels) to harvest red snapper, and sometimes use longlines (in the Gulf of Mexico) and spears.</li>\n<li>Commercial fishermen using hook and line gear attach multiple hooks to a vertical line and weight it at the bottom.</li>\n<li>Recreational anglers primarily use hook and line gear to harvest red snapper.</li>\n<li>Fishermen are encouraged to use <a href="https://www.flseagrant.org/fisheries/venting/" rel="external">venting tools</a> and <a href="http://flseagrant.ifas.ufl.edu/catch_and_release_new/#d.en.298437" rel="external">recompression devices</a> when releasing fish suffering from barotrauma. Barotrauma occurs when the swim bladder of a fish expands as it is quickly brought to the surface. Venting tools help deflate the swim bladder and recompression devices help the fish return to the depth at which it was caught to recompress the air in the swim bladder, preventing serious injury to the fish.</li>\n<li>In the Gulf of Mexico:\n<ul>\n<li>Regulations prohibit fishing in certain areas of the Gulf of Mexico to protect sensitive fish populations and habitats.</li>\n<li>Measures are in place to reduce sea turtle bycatch by longline gear and include limiting times or areas where fishermen can fish, gear restrictions, and a limit on the number of vessels that can participate in the reef fish fishery. &nbsp;In addition, all commercial fishermen must follow special sea turtle release protocols and have specialized gear to improve the chances of incidentally caught sea turtles to survive.</li>\n</ul>\n</li>\n<li>In the South Atlantic:\n<ul>\n<li>Circle hooks are required when fishing for snapper and grouper species north of latitude 28° N. De-hooking devices are also required in the South Atlantic for snapper-grouper species.</li>\n<li>Measures are in place to reduce sea turtle bycatch by fishing gear and include gear restrictions and handling requirements, and a limit on the number of vessels that can participate in the snapper-grouper fishery.</li>\n</ul>\n</li>\n</ul>\n</li>\n<li>Recreational fishery:\n<ul>\n<li>Recreational anglers primarily use hook and line gear to harvest red snapper.</li>\n<li>In the Gulf of Mexico:\n<ul>\n<li>Recreational anglers landed more than 7 million pounds of Gulf of Mexico red snapper in 2016.</li>\n<li>Red snapper must be a minimum size to be caught, and there is a limit on how many red snapper anglers can keep per day.</li>\n<li>Charter vessels and headboats must have a permit to fish in federal waters.</li>\n<li>For-hire vessels must use specialized gear and follow certain sea turtle release protocols.</li>\n</ul>\n</li>\n<li>In the South Atlantic:\n<ul>\n<li>In 2012, 2013, and 2014 the red snapper season was limited.</li>\n<li>In 2010-2011 and 2015-2016, the red snapper fishery was closed.</li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>\n',
    harvestType: null,
    healthBenefits:
      '<p>Red snapper is low in saturated fat and sodium and is a very good source of protein.</p>\n',
    human_Health_: null,
    humanHealth: null,
    physicalDescription:
      '<ul>\n<li>Red snapper in deeper waters tend to be redder than those caught in shallower waters.</li>\n<li>They have a long triangular face with the upper part sloping more strongly than the lower.</li>\n<li>Their jaws are equal, with the lower one sometimes slightly projecting.</li>\n<li>They have enlarged canine teeth, which is why they are called “snappers.”</li>\n</ul>\n',
    production: null,
    protein: '20.51 g',
    quote:
      'U.S. wild-caught red snapper is a smart seafood choice because it is sustainably managed under rebuilding plans that allow limited harvest by U.S. fishermen.',
    quoteBackgroundColor: '#ab4946',
    research: null,
    saturatedFattyAcidsTotal: '0.285 g',
    selenium: '38.2 mcg',
    servingWeight: null,
    servings: '1',
    sodium: '64 mg',
    source: '<p>U.S. wild-caught from North Carolina to Texas.</p>\n',
    sugarsTotal: null,
    taste: '<p>Red snapper has a sweetly mild but distinctive flavor.</p>\n',
    texture: '<p>Red snapper is semi-firm, lean, and moist.</p>\n',
    path: '/profiles/red-snapper',
    lastUpdate: '09/16/2019 - 11:11',
    href: 'https://line-ready-api.azurewebsites.net/fish/106',
    method: null,
    rel: null,
  },
  {
    id: 105,
    fisheryManagement:
      '<ul>\n<li>The <a href="http://www.mafmc.org/tilefish/">Mid-Atlantic</a>, <a href="http://safmc.net/regulations/regulations-by-species/golden-tilefish/">South Atlantic</a>, and <a href="http://www.gulfcouncil.org/fishery_management_plans/reef_fish_management.php">Gulf of Mexico Fishery Management Councils</a> develop management measures for the tilefish fisheries in their respective jurisdictions. NOAA Fisheries is responsible for implementing and enforcing these measures.</li>\n</ul>\n<ul>\n<li>The Mid-Atlantic/Southern New England <a href="https://www.fisheries.noaa.gov/management-plan/tilefish-fishery-management-plan" target="_blank">Tilefish Fishery Management Plan</a> includes:\n<ul>\n<li>Annual catch limits.</li>\n<li>Permit requirements.</li>\n<li>Individual Fishing Quota (IFQ) program.</li>\n<li>An overall annual limit on incidental landings of tilefish and a per-trip possession limit.</li>\n<li>Closure of the incidental fishery if the annual limit is reached, prohibiting any additional landings.</li>\n<li>Prohibition of bottom-tending mobile gear (such as trawls) in certain areas in federal waters to reduce impacts on key tilefish habitats.</li>\n</ul>\n</li>\n<li>The South Atlantic <a href="https://www.fisheries.noaa.gov/management-plan/south-atlantic-snapper-grouper-fishery-management-plan" target="_blank">Snapper Grouper Fishery Management Plan</a> includes:\n<ul>\n<li>Permit requirements, including a limited access endorsement program to harvest golden tilefish with longline.</li>\n<li>Annual catch limits by commercial gear type (longline and hook-and-line).</li>\n<li>Commercial trip limits.</li>\n<li>Prohibition of longline gear in certain areas to protect snapper-grouper species spawning sites and live-bottom habitat.</li>\n</ul>\n</li>\n<li>The Gulf of Mexico <a href="https://www.fisheries.noaa.gov/management-plan/gulf-mexico-reef-fish-fishery-management-plan" target="_blank">Reef Fish Fishery Management Plan</a> includes:\n<ul>\n<li>Annual catch limits for recreational and commercial anglers.</li>\n<li>A commercial IFQ program.</li>\n<li>To protect reef fish, sea turtles, and bottom habitat, restrictions on the areas/depths where longlines can be used.</li>\n</ul>\n</li>\n<li>The South Atlantic stock is subject to overfishing according to the 2016 stock assessment. When overfishing occurs, managers take measures to reduce the fishing rate to end overfishing.</li>\n<li>The commercial tilefish fisheries in the Mid-Atlantic and the Gulf of Mexico are managed through IFQ&nbsp;programs.\n<ul>\n<li>Specific details vary by region but, in general, managers allocate a percentage of the annual catch to participating fishermen.</li>\n<li>Fishermen choose when to fish for their allocation throughout the year, ideally when market and weather conditions are best. This also results in a more consistent supply of fish to the consumer and increased safety at sea.</li>\n<li><a href="https://www.fisheries.noaa.gov/national/laws-and-policies/catch-shares">Catch share programs</a>, such as these IFQ programs, offer fishermen a direct incentive to use sustainable fishing practices – the quota may&nbsp;be increased as fish populations grow, leading to an increase in each fisherman\'s individual allocation and subsequent profits.</li>\n</ul>\n</li>\n<li>For more information, visit the <a href="https://www.greateratlantic.fisheries.noaa.gov/sustainable/species/tilefish/" target="_blank">NOAA Fisheries Greater Atlantic Regional Fisheries Office: Golden Tilefish Information</a> website, the <a href="http://sero.nmfs.noaa.gov/sustainable_fisheries/gulf_fisheries/reef_fish/index.html" target="_blank">NOAA Fisheries Southeast Regional Office: Reef Fish Information</a> website,&nbsp;or the <a href="http://sero.nmfs.noaa.gov/sustainable_fisheries/s_atl/sg/index.html">NOAA Fisheries Southeast Regional Office: Snapper-Grouper Information</a> website.</li>\n</ul>\n',
    habitat:
      '<ul>\n<li>Tilefish live in water from 250 to 1,500 feet deep where bottom temperatures range from 49 to 58 ° F.</li>\n<li>Individual tilefish are found in and around submarine canyons, where they burrow in mud or sand sediment.</li>\n<li>Tilefish sometimes concentrate in small groups.</li>\n<li>Habitats can be classified as rocks and boulders, pueblo habitats, or vertical burrows. Vertical burrows are the most common type of habitat. Pueblo habitats are found in the side of submarine canyon walls and are named because of their resemblance to the pueblo communities of Native Americans in the southwestern United States.</li>\n<li>Managers have closed four deep water canyons from Georges Bank to the Mid-Atlantic to bottom-tending mobile gear (such as otter trawls) to protect tilefish habitat.</li>\n<li>Many fish and crustacean species are found in and around tilefish habitat because it provides food and shelter.</li>\n</ul>\n',
    habitatImpacts:
      'Fishing gear used to catch tilefish rarely contacts the ocean floor and has minimal impacts on habitat.',
    imageGallery: null,
    location:
      '<ul>\n<li>Tilefish are found along the outer continental shelf and upper continental slope of the entire U.S. East Coast and in the Gulf of Mexico.</li>\n<li>They are most abundant from Nantucket Island, Massachusetts, south to Cape May, New Jersey.</li>\n</ul>\n',
    management: null,
    noaaFisheriesRegion: null,
    population:
      'Above target population levels in the Gulf of Mexico, and near target population levels in the Mid-Atlantic and South Atlantic.',
    populationStatus:
      '<ul>\n<li>According to the 2017&nbsp;<a href="http://www.mafmc.org/s/Golden_Tile_Assessment_Update2017-POPDY.pdf">stock assessment</a>, the Mid-Atlantic stock is not overfished&nbsp;and is not subject to overfishing.&nbsp;</li>\n<li>According to the 2016 <a href="http://sedarweb.org/sedar-25u">stock assessment</a>, the South Atlantic stock is not overfished, and&nbsp;is not subject to overfishing based on 2018 catch data.</li>\n<li>According to the 2011 <a href="http://sedarweb.org/sedar-22">stock assessment</a>, the Gulf of Mexico stock is not overfished&nbsp;and is not subject to overfishing.</li>\n</ul>\n',
    scientificName: 'Lopholatilus chamaeleonticeps',
    speciesAliases:
      '<a href="/species-aliases/golden-tilefish" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Golden tilefish</a>, <a href="/species-aliases/golden-bass" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Golden bass</a>, <a href="/species-aliases/golden-snapper" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Golden snapper</a>, <a href="/species-aliases/great-northern-tilefish" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Great northern tilefish</a>, <a href="/species-aliases/rainbow-tilefish" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Rainbow tilefish</a>',
    speciesIllustrationPhoto: {
      src: 'https://www.fishwatch.gov/sites/default/files/tilefish.png',
      alt: '',
      title: '',
    },
    speciesName: 'Tilefish',
    animalHealth: null,
    availability: '<p>Year-round.</p>\n',
    biology:
      '<ul>\n<li>Tilefish grow slowly, up to 43 inches, although the average size harvested is 24 inches.</li>\n<li>They have a long life span, up to 46 years (females) and 39 years (males). These are the oldest tilefish on record, but radiometric dating techniques indicate tilefish may live as long as 50 years.</li>\n<li>Tilefish are able to reproduce when they reach 13 inches long and 3 pounds (approximately 2 to 4 years old).</li>\n<li>Tilefish spawn from March through November in the Atlantic and from January through June in the Gulf of Mexico.</li>\n<li>Spawning peaks in June (Mid-Atlantic) and from April to June (South Atlantic and Gulf of Mexico).</li>\n<li>Females release 2 to 8 million eggs when they spawn.</li>\n<li>Tilefish feed during the day on the bottom, eating shrimp, crabs, clams, snails, worms, anemones, and sea cucumbers.</li>\n<li>Monkfish, spiny dogfish, conger eels, large bottom-dwelling sharks (such as dusky and sandbar sharks), and other tilefish prey on juvenile tilefish.</li>\n</ul>\n',
    bycatch: 'Regulations are in place to minimize bycatch.',
    calories: '96',
    carbohydrate: null,
    cholesterol: '50 mg',
    color: '',
    diseaseTreatmentandPrevention: null,
    diseasesinSalmon: null,
    displayedSeafoodProfileIllustration: null,
    ecosystemServices: null,
    environmentalConsiderations: null,
    environmentalEffects: null,
    farmingMethods: null,
    fatTotal: '2.31 g',
    feeds_: null,
    feeds: null,
    fiberTotalDietary: null,
    fishingRate:
      'At recommended levels in the Mid-Atlantic, Gulf of Mexico, and South Atlantic.',
    harvest:
      '<ul>\n<li>Commercial fishery:\n<ul>\n<li>In 2017, commercial landings of tilefish totaled more than 2.6&nbsp;million pounds and were valued at more than $8.3&nbsp;million. The majority of the commercial harvest&nbsp;was landed in New York, Florida, and New Jersey.</li>\n<li>Most of the commercial harvest of tilefish comes from the Mid-Atlantic/Southern New England stock, the largest of the three U.S. tilefish stocks.</li>\n</ul>\n</li>\n<li>Gear types:\n<ul>\n<li>Bottom longline gear catches the majority of the commercial harvest.</li>\n<li>A small amount of tilefish are caught with otter trawls in the Mid-Atlantic and with&nbsp;handlines in the South Atlantic and Gulf of Mexico.</li>\n</ul>\n</li>\n<li>Recreational fishery:\n<ul>\n<li>U.S. recreational fisheries for tilefish are much smaller than the commercial fisheries, but have been increasing in recent years.\n<ul>\n<li>Recreational fishermen can keep a limited number of tilefish per fishing trip in the Mid-Atlantic/Southern New England area.</li>\n<li>There is a limit on how many tilefish recreational fishermen can keep and a limit on the total amount that can be harvested during the year in the South Atlantic.</li>\n<li>The South Atlantic recreational fishery is closed when the annual catch limit is projected to be met.</li>\n<li>In the Gulf of Mexico, tilefish are included in the reef fish aggregate bag limit, along with several other reef fish species, and the fishery is closed when the annual catch limit is projected to be met.</li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>\n',
    harvestType: null,
    healthBenefits:
      '<p>Tilefish are low in sodium. They are a good source of niacin and phosphorus, and a very good source of protein, vitamin B12, and selenium. More information on <a href="https://www.fishwatch.gov/eating-seafood/health">health and seafood</a>.</p>\n',
    human_Health_: null,
    humanHealth: null,
    physicalDescription:
      '<ul>\n<li>Tilefish, sometimes known as “the clown of the sea,” are colorful.</li>\n<li>They are iridescent blue-green on the back, with numerous spots of bright yellow and gold. Their bellies are white, and their heads are rosy with blue under the eyes.</li>\n<li>Their pectoral fins are sepia-colored, and the edge of their anal fins is purplish-blue.</li>\n<li>Golden tilefish are easily distinguishable from other members of the tilefish family by the large crest on their head.</li>\n</ul>\n',
    production: null,
    protein: '17.5 g',
    quote:
      'U.S. wild-caught tilefish is a smart seafood choice because it is sustainably managed and responsibly harvested under U.S. regulations.',
    quoteBackgroundColor: '#8e8135',
    research: null,
    saturatedFattyAcidsTotal: '0.441 g',
    selenium: '36.5 mcg',
    servingWeight: null,
    servings: '1',
    sodium: '53 mg',
    source: '<p>U.S. wild-caught from Massachusetts to Texas.</p>\n',
    sugarsTotal: null,
    taste:
      '<p>Tilefish has a mild flavor, similar to lobster or crab. Almost all tilefish is sold fresh.</p>\n',
    texture: '<p>Firm and flaky.</p>\n',
    path: '/profiles/tilefish',
    lastUpdate: '02/07/2020 - 13:56',
    href: 'https://line-ready-api.azurewebsites.net/fish/105',
    method: null,
    rel: null,
  },
  {
    id: 104,
    fisheryManagement:
      '<ul>\n<li>Effective conservation and management of highly migratory species like bluefin tuna require international cooperation as well as strong domestic management.</li>\n<li><a href="https://www.fisheries.noaa.gov">NOAA Fisheries</a>, through the <a href="https://www.fisheries.noaa.gov/topic/atlantic-highly-migratory-species">Atlantic Highly Migratory Species Management Division</a>, manages the Atlantic bluefin tuna fishery in the United States, and sets regulations for the U.S. fishery based on conservation and management recommendations from the <a href="http://www.iccat.int/en/" target="_blank">International Commission for the Conservation of Atlantic Tunas (ICCAT)</a>, consistent with applicable U.S. laws.</li>\n<li>Managed under the <a href="https://www.fisheries.noaa.gov/management-plan/consolidated-atlantic-highly-migratory-species-management-plan" target="_blank">2006 Consolidated Atlantic Highly Migratory Species Fishery Management Plan</a> and amendments:\n<ul>\n<li>Commercial and recreational fishermen must have a permit to harvest bluefin tuna.</li>\n<li>Annual quota and subquotas.</li>\n<li>Gear restrictions.</li>\n<li>Time/area closures.</li>\n<li>Minimum size limits.</li>\n<li>Federal management for Atlantic tunas applies to state waters as well, except in Maine, Connecticut, and Mississippi. NOAA Fisheries periodically reviews these states’ regulations to make sure they’re consistent with federal regulations.</li>\n</ul>\n</li>\n<li>Regulations do not allow targeted fishing of bluefin tuna in the Gulf of Mexico, an important spawning area for the species.</li>\n<li>NOAA Fisheries published <a href="https://www.fisheries.noaa.gov/action/amendment-7-2006-consolidated-hms-fishery-management-plan-bluefin-tuna-management">several new regulations</a> that are expected to reduce and improve accounting for bluefin tuna dead discards, including gear restricted areas and individual transferable quotas in the pelagic longline fishery, modified quota category allocations, and enhanced monitoring and reporting.</li>\n<li>In 2000, the United States established the <a href="https://www.fisheries.noaa.gov/national/marine-mammal-protection/dolphin-safe">Dolphin-Safe Tuna Tracking and Verification Program</a> to monitor the domestic production and importation of all frozen and processed tuna products nationwide, and to authenticate any associated dolphin-safe claim.</li>\n</ul>\n',
    habitat:
      '<ul>\n<li>Atlantic bluefin tuna live near the surface in temperate waters but frequently dive to depths of 500 to 1,000 meters.</li>\n<li>They are a&nbsp;highly migratory species. They can migrate thousands of miles across an entire ocean.</li>\n<li>Tagging studies have indicated that bluefin tuna move across the east/west boundary in the Atlantic.</li>\n<li>They tend to spawn in the same areas in the Gulf of Mexico.</li>\n</ul>\n',
    habitatImpacts:
      'Fishing gear used to catch bluefin tuna rarely contacts the ocean floor and has minimal impact on habitat.',
    imageGallery: null,
    location:
      '<ul>\n<li>In the western Atlantic, bluefin tuna are found from Newfoundland to the Gulf of Mexico.</li>\n</ul>\n',
    management: null,
    noaaFisheriesRegion: null,
    population:
      'The population level is unknown for bluefin tuna in the western Atlantic.',
    populationStatus:
      '<ul>\n<li>The 2017 <a href="http://www.iccat.int/Documents/Meetings/Docs/2017_SCRS_REP_ENG.pdf" rel="external">stock assessment (pages 111 through 114)</a> indicated that the western Atlantic bluefin tuna stock is not subject to overfishing.</li>\n<li>Based on the information in the 2017 stock assessment, NOAA Fisheries has determined that the western Atlantic bluefin tuna stock has an unknown overfished status.</li>\n<li>Scientists estimate that the western stock’s spawning stock biomass (a measure of the amount of bluefin that are able to reproduce) has been increasing since about 2004, after two decades of stability.</li>\n<li>For the 2017 stock assessment, the scientists were unable to determine if the stock is rebuilt under the 20-year rebuilding plan. Based on this information, ICCAT adopted an <a href="https://www.iccat.int/Documents/Recs/compendiopdf-e/2017-06-e.pdf">interim conservation and management plan for the stock for 2018 through 2020</a>.</li>\n<li>Despite the longstanding uncertainty in estimating future recruitment, catch levels have been set at a level that is expected to support the maximum sustainable yield.</li>\n<li>ICCAT selected a catch limit for 2018 through 2020 that is a 17% increase relative to the level in effect for 2015 through 2017. This level provides a buffer from the top end of the range in the scientific advice to ensure an additional layer of precaution given the uncertainties that are not fully accounted for in the assessment.</li>\n<li>The Gulf of Mexico is the only known spawning area for the western stock of Atlantic bluefin tuna, and protecting these fish during spawning can help the long-term rebuilding of the depleted bluefin tuna population.</li>\n</ul>\n',
    scientificName: 'Thunnus thynnus',
    speciesAliases:
      '<a href="/species-aliases/tuna" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Tuna</a>, <a href="/species-aliases/bluefin-tuna" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Bluefin tuna</a>, <a href="/species-aliases/toro" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Toro</a>, <a href="/species-aliases/maguro" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Maguro</a>, <a href="/species-aliases/giant-bluefin" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Giant bluefin</a>, <a href="/species-aliases/northern-bluefin-tuna" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Northern bluefin tuna</a>',
    speciesIllustrationPhoto: {
      src:
        'https://www.fishwatch.gov/sites/default/files/atlantic_bluefin_tuna_0.png',
      alt: '',
      title: '',
    },
    speciesName: 'Western Atlantic Bluefin Tuna',
    animalHealth: null,
    availability: '<p>Year-round.</p>\n',
    biology:
      '<ul>\n<li>Bluefin tuna grow more slowly than other tuna.</li>\n<li>They have a long lifespan, up to 20 years or more and generally don’t spawn until they are about 8 years old.&nbsp;</li>\n<li>They spawn from mid-April to June, mainly in the Gulf of Mexico.</li>\n<li>Females can produce up to 10 million eggs a year.</li>\n<li>The eggs are fertilized in the water column and hatch in about 2 days.</li>\n<li>Bluefin tuna are top predators.</li>\n<li>Juveniles eat fish, squid, and crustaceans, and adults feed mainly on baitfish such as herring, bluefish, and mackerel.</li>\n<li>Sharks, marine mammals (including killer whales and pilot whales), and large fish feed on bluefin tuna. <a href="https://www.fishwatch.gov/profiles/bluefish">Bluefish</a> and seabirds also prey upon juvenile bluefin tuna.</li>\n</ul>\n',
    bycatch:
      'Fishing gear used by U.S. fishermen to target schools of bluefin tuna is fairly selective, and allows for the live release of any unintentionally caught species.',
    calories: '144',
    carbohydrate: null,
    cholesterol: '38 mg',
    color:
      '<p>Deep red when uncooked. When cooked, the meat is an off-white or ivory color.</p>\n',
    diseaseTreatmentandPrevention: null,
    diseasesinSalmon: null,
    displayedSeafoodProfileIllustration: null,
    ecosystemServices: null,
    environmentalConsiderations: null,
    environmentalEffects: null,
    farmingMethods: null,
    fatTotal: '4.9 g',
    feeds_: null,
    feeds: null,
    fiberTotalDietary: null,
    fishingRate: 'At recommended level.',
    harvest:
      '<ul>\n<li>ICCAT implemented harvest quotas for the western Atlantic bluefin tuna stock in 1982. Since then, catch has been relatively stable.</li>\n<li>In 2016, U.S. commercial and recreational fishermen caught 1,026&nbsp;metric tons of western Atlantic bluefin tuna (landings and dead discards).</li>\n<li>In 2016, U.S. catch comprised 54 percent of total western Atlantic bluefin tuna catch and 5&nbsp;percent of Atlantic-wide bluefin tuna catch (including the Mediterranean Sea).</li>\n<li>Gear types, habitat impacts, and bycatch:\n<ul>\n<li>U.S. fishermen harvest bluefin tuna with handgear (rod-and-reel, handline, and harpoon) and purse seines.</li>\n<li>Although fishermen are not allowed to use pelagic longline gear in the United States to target bluefin tuna directly, regulations allow them to retain a limited number of bluefin tuna caught incidentally while fishing for other species such as swordfish and yellowfin tuna.</li>\n<li>Fishermen generally target schools of bluefin tuna, and their fishing gear is fairly selective and allows for the live release of any unintentionally caught species.</li>\n<li>Fishing gear used to catch bluefin tuna rarely contacts the ocean floor and therefore has minimal impact on habitat.</li>\n<li>NOAA Fisheries requires U.S. commercial fishermen who fish for yellowfin tuna, swordfish, and other species with pelagic longlines in the Gulf of Mexico to use "weak hooks," a type of hook designed to reduce the incidental catch and bycatch of Atlantic bluefin tuna.</li>\n<li>Fishing for bluefin tuna in two known hotspots—Cape Hatteras, North Carolina and the Gulf of Mexico—is strictly regulated.</li>\n</ul>\n</li>\n<li>Commercial harvest:\n<ul>\n<li>In 2016, commercial landings of Atlantic bluefin tuna totaled 691 metric tons dressed weight and were valued at $11 million.</li>\n<li>Ex-vessel prices depend on a number of factors, including the quality of the fish (e.g., freshness, fat content, method of storage), the weight of the fish, the supply of fish, and consumer demand.</li>\n<li>Exports vary from year to year. In 2016, 43 percent of U.S. Atlantic bluefin catch was exported, mainly to sushi markets in Japan.</li>\n<li>Exports of Atlantic bluefin tuna generally depend on the amount of commercial landings and Japanese yen/U.S. dollar exchange rates.</li>\n</ul>\n</li>\n<li>Recreational U.S. fishery:\n<ul>\n<li>Bluefin tuna may not be sold.</li>\n<li>Bluefin tuna must be larger than 27 inches to be retained.</li>\n<li>Depending on the recreational fishery (e.g., private vessels and charter/headboat vessels), limits on the amount and size of fish that fishermen can keep per fishing trip vary. For the latest information on current retention limits, visit the <a href="https://hmspermits.noaa.gov/" target="_blank">NOAA Fisheries HMS Permit Shop</a>.</li>\n<li>All released bluefin tuna must be released without removing the fish from the water and in a manner that will maximize its survival.</li>\n<li>Recreational fishing for highly migratory species such as bluefin tuna provides significant economic benefits to coastal communities through individual angler expenditures, recreational charters, tournaments, and the shoreside businesses that support those activities.</li>\n</ul>\n</li>\n</ul>\n',
    harvestType: null,
    healthBenefits:
      '<p>Bluefin tuna is a very good source of protein, thiamin, selenium, vitamin B6, and omega-3 fatty acids.</p>\n',
    human_Health_: null,
    humanHealth: null,
    physicalDescription:
      '<ul>\n<li>Atlantic bluefin tuna have large, torpedo-shaped bodies that are nearly circular in cross-section.</li>\n<li>They are the largest of the tuna species and can reach up to 13 feet and 2,000 pounds.</li>\n<li>They have dark blue-black on the back and white on the lower sides and belly.</li>\n<li><span>Atlantic bluefin tuna h</span>ave colorless lines alternating with rows of colorless spots on their lower sides.</li>\n<li>The second fin on their back (dorsal fin) is reddish brown, and they have short pectoral fins.</li>\n<li>These characteristics separate this species from other members of the tuna genus, <em>Thunnus</em>.</li>\n</ul>\n',
    production: null,
    protein: '23.33 g',
    quote:
      'U.S. wild-caught western Atlantic bluefin tuna is a smart seafood choice because it is sustainably managed under a conservation and management plan that allows limited harvest by U.S. fishermen.',
    quoteBackgroundColor: '#517599',
    research: null,
    saturatedFattyAcidsTotal: '1.257 g',
    selenium: '36.5 mcg',
    servingWeight: null,
    servings: '1',
    sodium: '39 mg',
    source: '<p>U.S. wild-caught from Maine to Louisiana.</p>\n',
    sugarsTotal: null,
    taste:
      '<p>Bluefin has a distinctive flavor. With its high fat content, it is especially prized for sushi and sashimi. Cooking is generally not advised as it produces a strong fish taste and odor.</p>\n',
    texture:
      '<p>Bluefin tuna flesh is the darkest and fattiest of any tuna. A higher fat content in bluefin tuna is equated with a higher-quality product. The flesh has the firmness and appearance of beef steaks.</p>\n',
    path: '/profiles/western-atlantic-bluefin-tuna',
    lastUpdate: '09/03/2019 - 14:11',
    href: 'https://line-ready-api.azurewebsites.net/fish/104',
    method: null,
    rel: null,
  },
  {
    id: 103,
    fisheryManagement:
      '<ul>\n<li><a href="https://www.westcoast.fisheries.noaa.gov/">NOAA Fisheries</a> and the <a href="https://www.pcouncil.org/">Pacific Fishery Management Council</a> manage the widow rockfish fishery on the West Coast.</li>\n<li>Managed under the <a href="https://www.pcouncil.org/groundfish/fishery-management-plan/">Pacific Coast Groundfish Fishery Management Plan</a>:\n<ul>\n<li>Permits and limited entry to the fishery.</li>\n<li>Limit on how much may be harvested in one fishing trip.</li>\n<li>Certain seasons and <a href="https://www.westcoast.fisheries.noaa.gov/fisheries/management/groundfish_closures/groundfish_closed_areas.html">areas are closed</a> to fishing.</li>\n<li>Gear restrictions help reduce bycatch and impacts on habitat.</li>\n<li>A <a href="https://www.westcoast.fisheries.noaa.gov/fisheries/groundfish_catch_shares/index.html">trawl rationalization catch share program</a> that includes:\n<ul>\n<li>Catch limits based on the population status of each fish stock and divided into shares that are allocated to individual fishermen or groups.</li>\n<li>Provisions that allow fishermen to decide how and when to catch their share.</li>\n</ul>\n</li>\n</ul>\n</li>\n<li><a href="https://www.fisheries.noaa.gov/region/alaska">NOAA Fisheries</a> and the <a href="https://www.npfmc.org/">North Pacific Fishery Management Council</a> manage widow rockfish as part of the other rockfish complex in the Gulf of Alaska.</li>\n<li>Managed under the&nbsp;<a href="https://www.fisheries.noaa.gov/management-plan/groundfish-gulf-alaska-management-plan">Fishery Management Plan for Groundfish of the Gulf of Alaska</a>:\n<ul>\n<li>There is no directed fishery for this species in Alaska, and only minor amounts are landed incidentally in other fisheries.</li>\n</ul>\n</li>\n</ul>\n',
    habitat:
      '<ul>\n<li>Widow rockfish are found at depths ranging from 80 to 1,200 feet.</li>\n<li>Both juveniles and adults exist in large schools and are found above large jagged rocks and near cobblestone.</li>\n</ul>\n',
    habitatImpacts:
      'Most fishing gear used to harvest widow rockfish rarely contacts the ocean floor and has minimal impacts on habitat. Area closures and gear restrictions protect sensitive rocky, cold-water coral and sponge habitats from bottom trawl gear.',
    imageGallery: null,
    location:
      '<ul>\n<li>Widow rockfish are found between the Gulf of Alaska and northern Baja California.</li>\n<li>Adults are rarely seen in California and are most abundant from British Columbia to northern California.</li>\n</ul>\n',
    management: null,
    noaaFisheriesRegion: null,
    population: 'Above target population levels on the Pacific Coast.',
    populationStatus:
      '<ul>\n<li>According to the <a href="http://www.pcouncil.org/wp-content/uploads/2016/04/WidowAssessment2015.pdf">2019&nbsp;stock assessment</a><a href="https://www.pcouncil.org/documents/2019/10/stock-assessment-update-status-of-widow-rockfish-sebastes-entomelas-along-the-u-s-west-coast-in-2019-october-21-2019.pdf">,</a> the West Coast stock of widow rockfish is not overfished and not subject to overfishing based on <a href="https://www.nwfsc.noaa.gov/research/divisions/fram/observation/data_products/species_management.cfm">2018&nbsp;catch data</a>.\n<ul>\n<li>Due to the quick expansion of the West Coast fishery, West Coast widow rockfish populations were depleted and declared overfished in 2001.</li>\n<li>Fishery managers implemented a rebuilding plan in 2001, and declared the stock rebuilt in 2011.</li>\n</ul>\n</li>\n<li>In the Gulf of Alaska, widow rockfish is part of the other rockfish complex.\n<ul>\n<li>According to the <a href="https://www.afsc.noaa.gov/REFM/Docs/2017/GOAorock.pdf">2017 stock assessment</a>, the status of this complex is unknown.</li>\n<li>The stock complex is not subject to overfishing.</li>\n</ul>\n</li>\n</ul>\n',
    scientificName: 'Sebastes entomelas',
    speciesAliases:
      '<a href="/species-aliases/brown-bomber" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Brown bomber</a>, <a href="/species-aliases/soft-brown" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Soft brown</a>, <a href="/species-aliases/brownie" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Brownie</a>, <a href="/species-aliases/belinda-bass" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Belinda bass</a>',
    speciesIllustrationPhoto: {
      src: 'https://www.fishwatch.gov/sites/default/files/widow_rockfish.png',
      alt: 'Widow Rockfish',
      title: '',
    },
    speciesName: 'Widow Rockfish',
    animalHealth: null,
    availability: '<p>Year-round.</p>\n',
    biology:
      '<ul>\n<li>Widow rockfish reach lengths up to 24 inches and may live as long as 60 years, but fish older than 20 are uncommon.</li>\n<li>Males grow faster than females, but females reach larger sizes.</li>\n<li>Widow rockfish mature at about 8 years old or when they are about 16.5 inches long.</li>\n<li>Widow rockfish are internal fertilizers, and larvae are released alive in January or February.</li>\n<li>Juveniles feed on krill and copepods.</li>\n<li>Older fish feed on juvenile crabs, amphipods, krill, and small fishes.&nbsp;</li>\n<li>Chinook salmon and northern fur seals feed on juvenile widow rockfish.</li>\n</ul>\n',
    bycatch:
      'Regulations are in place to minimize bycatch of overfished and protected species.',
    calories: '94',
    carbohydrate: null,
    cholesterol: '35 mg',
    color:
      '<p>Raw flesh varies from light pink or translucent, to pink, to red, and turns white when cooked.</p>\n',
    diseaseTreatmentandPrevention: null,
    diseasesinSalmon: null,
    displayedSeafoodProfileIllustration: null,
    ecosystemServices: null,
    environmentalConsiderations: null,
    environmentalEffects: null,
    farmingMethods: null,
    fatTotal: '1.6 g',
    feeds_: null,
    feeds: null,
    fiberTotalDietary: null,
    fishingRate: 'At recommended levels.',
    harvest:
      '<ul>\n<li>In 2018, commercial landings of widow rockfish on the West Coast totaled more than 22.9&nbsp;million pounds and were valued at more than $5.7 million.&nbsp;</li>\n<li>The majority of the catch comes from Oregon and Washington and the remainer&nbsp;comes from California and Alaska.</li>\n<li>Gear types, habitat impacts, and bycatch:\n<ul>\n<li>Primarily harvested with midwater trawl gear, which has minimal impacts on ocean bottom habitats. To a lesser extent, harvested with bottom trawl gear.</li>\n<li>Midwater and bottom trawls may sometimes catch other species of fish, including overfished and protected species.\n<ul>\n<li>Gear restrictions, closed areas, and catch share programs limit when, where, and how much trawl fishermen can harvest to reduce bycatch of other species.</li>\n<li><a href="https://www.westcoast.fisheries.noaa.gov/fisheries/management/groundfish_closures/rockfish_areas.html">Rockfish conservation areas</a> eliminate fishing in areas on the West Coast where overfished rockfish species co-occur with target stocks, like widow rockfish. These closed areas help prevent bycatch of overfished rockfish.</li>\n</ul>\n</li>\n<li>Widow rockfish are often caught incidentally in the Pacific whiting fishery\n<ul>\n<li>Managers are working to reduce incidental catch through the use of annual catch limits and catch shares.</li>\n</ul>\n</li>\n</ul>\n</li>\n<li>Recreational anglers fish for widow rockfish, but they comprise only a minor part of recreational groundfish fisheries.</li>\n</ul>\n',
    harvestType: null,
    healthBenefits: '',
    human_Health_: null,
    humanHealth: null,
    physicalDescription:
      '<ul>\n<li>Widow rockfish are dusky-brown with traces of light yellow and red.</li>\n<li>They have black fin membranes and a strongly slanted anal fin.</li>\n<li>They have weak or reduced (short) head spines and a mouth that is relatively small when compared to other rockfish.</li>\n</ul>\n',
    production: null,
    protein: '18.8 g',
    quote:
      'U.S. wild-caught widow rockfish is a smart seafood choice because it is sustainably managed and responsibly harvested under U.S. regulations. ',
    quoteBackgroundColor: '#554b3d',
    research: null,
    saturatedFattyAcidsTotal: '0.4 g',
    selenium: '36.5 mcg',
    servingWeight: null,
    servings: '1',
    sodium: '60 mg',
    source:
      '<p>U.S. wild-caught from the central Gulf of Alaska to northern Baja California.</p>\n',
    sugarsTotal: null,
    taste: '<p>Delicate, nutty flavor.</p>\n',
    texture: '<p>Lean with a medium-fine texture.</p>\n',
    path: '/profiles/widow-rockfish',
    lastUpdate: '04/28/2020 - 17:01',
    href: 'https://line-ready-api.azurewebsites.net/fish/103',
    method: null,
    rel: null,
  },
  {
    id: 102,
    fisheryManagement:
      '<ul>\n<li><a href="http://www.westcoast.fisheries.noaa.gov/">NOAA Fisheries</a> and the <a href="http://www.pcouncil.org/">Pacific Fishery Management Council</a> manage this fishery on the West Coast.</li>\n<li>Managed under the <a href="http://www.pcouncil.org/highly-migratory-species/fishery-management-plan-and-amendments/">Fishery Management Plan for U.S. West Coast Fisheries for Highly Migratory Species</a>:\n<ul>\n<li>Commercial fishermen must have permits and maintain logbooks.</li>\n<li>Gear restrictions and operational requirements.</li>\n</ul>\n</li>\n<li><a href="https://www.fisheries.noaa.gov/region/pacific-islands">NOAA Fisheries</a> and <a href="http://wpcouncil.org/">Western Pacific Fishery Management Council</a> manage this fishery in the Pacific Islands.</li>\n<li>Managed under the <a href="http://www.wpcouncil.org/fishery-plans-policies-reports/pelagics_fe/">Fishery Ecosystem Plan for the Pelagic Fisheries of the Western Pacific</a>:\n<ul>\n<li>Commercial fishermen must have permits and maintain logbooks.</li>\n<li>Longlines are prohibited in certain areas to protect endangered Hawaiian monk seals and reduce the potential for gear conflicts and localized stock depletion.</li>\n<li>Longline fishermen must carry a <a href="https://www.fisheries.noaa.gov/topic/enforcement/vessel-monitoring">vessel monitoring system</a>—a satellite transponder that provides real-time position updates and tracks vessel movements to enforce regulations.</li>\n<li>In Hawaii and American Samoa longline fishermen must also carry onboard observers when requested.</li>\n<li>Longline vessel owners and operators are required to attend annual protected species workshops.</li>\n<li>There are no management measures specific to mahimahi, because catch trends indicate that regulations are not necessary.</li>\n</ul>\n</li>\n</ul>\n',
    habitat:
      '<ul>\n<li>Pacific mahimahi live near the surface in tropical and subtropical waters around the world.</li>\n<li>They swim together in schools as juveniles, but older fish are usually found alone.</li>\n<li>They travel seasonally as adults with changes in water temperature.</li>\n</ul>\n',
    habitatImpacts:
      'Fishing gear used to catch mahimahi rarely contacts the ocean floor and has minimal impacts on habitat. ',
    imageGallery: null,
    location:
      '<ul>\n<li>Pacific mahimahi are found in the Pacific and Western Pacific and are caught from California to Hawaii and the U.S. Pacific Island territories.</li>\n<li>Most of the U.S. commercial harvest of Pacific mahimahi comes from Hawaii.</li>\n</ul>\n',
    management: null,
    noaaFisheriesRegion: null,
    population: 'The population level is unknown, but presumed stable.',
    populationStatus:
      '<ul>\n<li>Although the population is not formally assessed, scientists assume mahimahi populations are stable because the species is highly productive and widely distributed throughout the tropical/subtropical Pacific.&nbsp;</li>\n<li>Pacific mahimahi’s overfishing status is unknown.</li>\n<li>Mahimahi can handle relatively high fishing rates, but precautionary management seeks to maintain current harvest levels.</li>\n</ul>\n',
    scientificName: 'Coryphaena hippurus',
    speciesAliases:
      '<a href="/species-aliases/dolphinfish" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Dolphinfish</a>, <a href="/species-aliases/dorado" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Dorado</a>',
    speciesIllustrationPhoto: {
      src:
        'https://www.fishwatch.gov/sites/default/files/atlantic_mahimahi_dolphinfish.png',
      alt: 'Pacific MahiMahi',
      title: 'Pacific MahiMahi',
    },
    speciesName: 'Pacific Mahimahi',
    animalHealth: null,
    availability: '<p>Year-round.</p>\n',
    biology:
      '<ul>\n<li>Pacific mahimahi grow fast, up to 7 feet and 88 pounds.</li>\n<li>They live up to 5 years.</li>\n<li>They are capable of reproducing at 4 to 5 months old.</li>\n<li>They are believed to spawn every 2 to 3 days throughout their entire spawning season (perhaps year-round), releasing 33,000 to 66,000 eggs each time.</li>\n<li>Pacific mahimahi are top predators that feed in surface waters during the day.</li>\n<li>They eat a wide variety of species, including small pelagic fish, juvenile tuna, invertebrates, billfish, jacks, pompano, and pelagic larvae or nearshore, bottom-living species.</li>\n<li>Predators include large tuna, marine mammals, marlin, sailfish, and swordfish.</li>\n<li>NOAA Fisheries</li>\n</ul>\n',
    bycatch:
      'Regulations are in place to minimize bycatch in the tuna and swordfish fisheries that incidentally catch the most commercially available mahimahi.',
    calories: '85',
    carbohydrate: null,
    cholesterol: '73 mg',
    color:
      '<p>The raw flesh is pinkish to grayish-white, although along the lateral line the flesh is dark. When cooked, the meat is off-white.</p>\n',
    diseaseTreatmentandPrevention: null,
    diseasesinSalmon: null,
    displayedSeafoodProfileIllustration: null,
    ecosystemServices: null,
    environmentalConsiderations: null,
    environmentalEffects: null,
    farmingMethods: null,
    fatTotal: '0.7 g',
    feeds_: null,
    feeds: null,
    fiberTotalDietary: null,
    fishingRate: 'At recommended level.',
    harvest:
      '<ul>\n<li>Commercial fishery:\n<ul>\n<li>U.S. commercial fisheries in the western and central Pacific harvest the majority of U.S. mahimahi.</li>\n<li>In 2017, commercial landings of Pacific mahimahi harvested from the U.S. Pacific Islands totaled 954,000&nbsp;pounds and were valued at more than $3.4&nbsp;million. The majority of the catch comes from Hawaii.</li>\n<li>In 2017, commercial landings of Pacific mahimahi on the U.S. West Coast totaled approximately 25,000 pounds and were valued at approximately $52,800.</li>\n</ul>\n</li>\n<li>Gear types, habitat impacts, and bycatch:\n<ul>\n<li>Most mahimahi are harvested using troll and handlines. Mahimahi may also be caught incidentally in pelagic longline fisheries for tuna and swordfish.</li>\n<li>The amount of bycatch associated with the mahimahi fishery varies. U.S. pelagic longline fishermen, who target tuna and swordfish and who may incidentally catch mahimahi, are required to use specific tools and handling techniques to mitigate bycatch of turtles and marine mammals.</li>\n<li>Fishing gear used to catch mahimahi rarely contacts the seafloor so habitat impacts are minimal.</li>\n<li>Time-area closures also limit and prevent interactions between pelagic longline gear and non-target species.</li>\n<li>Onboard observers are required in some fisheries to record any interactions with sea turtles, seabirds, and marine mammals.</li>\n</ul>\n</li>\n<li>Recreational fishery:\n<ul>\n<li>Pacific mahimahi are a popular recreational fish.</li>\n<li>In 2017, recreational fishermen harvested more than 851,800 pounds of mahimahi in the U.S. Pacific Islands.</li>\n</ul>\n</li>\n</ul>\n',
    harvestType: null,
    healthBenefits:
      '<p>Mahimahi is low in saturated fat and is a good source of vitamin B12, phosphorus, potassium, protein, niacin, vitamin B6, and selenium.</p>\n',
    human_Health_: null,
    humanHealth: null,
    physicalDescription:
      '<ul>\n<li>Brightly colored back is an electric greenish blue, lower body is gold or sparkling silver, and sides have a mixture of dark and lights spots.</li>\n<li>Bright pattern fades almost immediately after mahimahi is harvested.</li>\n<li>Distinguished from the pompano dolphin by the number of dorsal fin rays and a very wide, square tooth patch on the tongue.</li>\n</ul>\n',
    production: null,
    protein: '18.5 g',
    quote:
      'U.S. wild-caught mahimahi is a smart seafood choice because it is sustainably managed and responsibly harvested under U.S. regulations.',
    quoteBackgroundColor: '#83a54b',
    research: null,
    saturatedFattyAcidsTotal: '0.188 g',
    selenium: '36.5 mcg',
    servingWeight: null,
    servings: '1',
    sodium: '88 mg',
    source:
      '<p>U.S. wild-caught from Hawaii, California, U.S. Pacific Island territories, and on the high seas.</p>\n',
    sugarsTotal: null,
    taste:
      '<p>Mahimahi has a sweet, mild flavor. For a milder flavor, trim away the darker portions of the meat.</p>\n',
    texture:
      '<p>Mahimahi is lean and fairly firm with large, moist flakes.</p>\n',
    path: '/profiles/pacific-mahimahi',
    lastUpdate: '06/29/2020 - 13:52',
    href: 'https://line-ready-api.azurewebsites.net/fish/102',
    method: null,
    rel: null,
  },
  {
    id: 101,
    fisheryManagement:
      '<ul>\n<li><a href="https://www.fisheries.noaa.gov/region/alaska">NOAA Fisheries</a> and the <a href="https://www.npfmc.org/">North Pacific Fishery Management Council</a> manage the Pacific ocean perch fishery in Alaska.</li>\n<li>Managed under the <a href="https://www.fisheries.noaa.gov/management-plan/groundfish-gulf-alaska-management-plan">Gulf of Alaska</a> and <a href="https://www.fisheries.noaa.gov/management-plan/groundfish-bering-sea-and-aleutian-islands-management-plan">Bering Sea/Aleutian Islands</a> Groundfish Fishery Management Plans:\n<ul>\n<li>Permits are required and the number of available permits is limited to control the amount of fishing.</li>\n<li>Managers determine how much Pacific ocean perch can be caught and then allocate this catch quota among groups of fishermen.&nbsp;</li>\n<li>Catch is monitored through record keeping, reporting requirements, and observer monitoring.</li>\n<li>A percentage of the Aleutian Islands catch is allocated to the <a href="https://www.fisheries.noaa.gov/alaska/commercial-fishing/community-development-quota-cdq-program">Community Development Quota Program</a>, which benefits fishery-dependent communities in western Alaska. The rest is allocated among the BSAI trawl sectors, based on historic harvest and future harvest needs, to improve retention and utilization of fishery resources by the trawl fleet.</li>\n<li>The <a href="https://www.fisheries.noaa.gov/alaska/commercial-fishing/central-goa-rockfish-program">Central Gulf of Alaska Rockfish Program</a>&nbsp;allows harvesters to fish together in cooperatives. These cooperatives are allocated specific amounts of the allowed catches of rockfish and species harvested incidentally to rockfish. The goal of the program is to spread out the fishery in time and space, allowing fishermen more flexibility to sell their catch for better prices and reducing the pressure of what was once an approximately 2-week fishery in July.&nbsp;</li>\n</ul>\n</li>\n<li><a href="https://www.westcoast.fisheries.noaa.gov/">NOAA Fisheries</a> and the <a href="https://www.pcouncil.org/">Pacific Fishery Management Council</a> manage the Pacific ocean perch fishery on the West Coast.</li>\n<li>Managed under the <a href="https://www.pcouncil.org/groundfish/fishery-management-plan/">Pacific Coast Groundfish Fishery Management Plan</a>:\n<ul>\n<li>NOAA Fisheries declared the Pacific coast stock of Pacific ocean perch overfished in 1999. The council adopted a rebuilding plan for the stock in 2000, which prohibited&nbsp;a directed fishery for the species. The stock was declared rebuilt in 2017.</li>\n<li>The regulations listed below that apply to all Pacific groundfish fisheries also provide for the conservation and management of Pacific ocean perch:\n<ul>\n<li>Limit on how much may be harvested in one fishing trip.</li>\n<li>Certain seasons and areas are closed to fishing.&nbsp;</li>\n<li>Gear restrictions help reduce bycatch and impacts on habitat.&nbsp;​</li>\n<li>A <a href="https://www.westcoast.fisheries.noaa.gov/fisheries/groundfish_catch_shares/index.html">trawl rationalization catch share program</a> that includes:\n<ul>\n<li>Catch limits that are based on the population status of each fish stock and divided into shares that are allocated to individual fishermen or groups.&nbsp;</li>\n<li>Provisions that allow fishermen to decide how and when to catch their share.</li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>\n<p>&nbsp;</p>\n',
    habitat:
      '<ul>\n<li>Pacific ocean perch live in deeper waters of the upper continental slope and along the edge of the continental shelf.&nbsp;</li>\n<li>Larvae and young juveniles live near the surface, while older juveniles and adults live near the ocean floor.&nbsp;</li>\n<li>Adults prefer sandy and rocky ocean bottoms, areas with vertical relief, and ocean habitats with structure-forming invertebrates, like coral.&nbsp;</li>\n<li>Adults migrate to shallow waters in the summer and offshore in the fall and winter to spawn and live.</li>\n</ul>\n',
    habitatImpacts:
      'Area closures and gear restrictions protect sensitive rocky, cold-water coral and sponge habitats from bottom trawl gear.',
    imageGallery: null,
    location:
      '<ul>\n<li>Pacific ocean perch are found off the coast of North America from California to the Western Aleutian Islands in Alaska.&nbsp;</li>\n<li>They are less commonly found south of Oregon and are particularly rare in Southern California.</li>\n</ul>\n',
    management: null,
    noaaFisheriesRegion: null,
    population: 'Above target population levels.',
    populationStatus:
      '<ul>\n<li>According to the 2018&nbsp;stock assessment, the <a href="https://www.fisheries.noaa.gov/resource/data/2018-assessment-pacific-ocean-perch-stock-gulf-alaska">Gulf of Alaska</a> stock of Pacific ocean perch is not overfished and not subject to overfishing.</li>\n<li>According to the 2018&nbsp;stock assessment, the <a href="https://www.fisheries.noaa.gov/resource/data/2018-assessment-pacific-ocean-perch-stock-bering-sea-aleutian-islands">Bering Sea/Aleutian Islands</a> stock of Pacific ocean perch is not overfished and not subject to overfishing.</li>\n<li>According to the 2017 stock assessment, the <a href="http://www.pcouncil.org/wp-content/uploads/2017/10/F4_Att1_Full_E-only_PacificOceanPerch2017_Assessment_NOV2017BB.pdf">Pacific Coast</a> stock of Pacific ocean perch is rebuilt, not overfished, and not subject to overfishing based on <a href="https://www.nwfsc.noaa.gov/research/divisions/fram/observation/data_products/species_management.cfm">2018&nbsp;catch data</a>.</li>\n</ul>\n',
    scientificName: 'Sebastes alutus',
    speciesAliases:
      '<a href="/species-aliases/pop" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">POP</a>, <a href="/species-aliases/rockfish" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Rockfish</a>',
    speciesIllustrationPhoto: {
      src:
        'https://www.fishwatch.gov/sites/default/files/pacific_ocean_perch.png',
      alt: 'Pacific Ocean Perch',
      title: 'Pacific Ocean Perch',
    },
    speciesName: 'Pacific Ocean Perch',
    animalHealth: null,
    availability: '<p>Year-round.</p>\n',
    biology:
      '<ul>\n<li>Pacific ocean perch grow slowly and may live to be 98 years old.&nbsp;</li>\n<li>They grow to about 20 inches long and weigh about 4 pounds.&nbsp;</li>\n<li>They do not reproduce until they are around 10 years old.&nbsp;</li>\n<li>Depending on their size, females can produce between 10,000 and 300,000 eggs.</li>\n<li>Pacific ocean perch mate in the fall. Eggs develop inside the female and receive some nourishment from the mother. &nbsp;</li>\n<li>Eggs hatch internally, and females release the larvae in the spring.&nbsp;</li>\n<li>Larvae eat small zooplankton (tiny floating organisms).</li>\n<li>Juveniles and adults feed on copepods and krill, and adults will also eat small fishes. &nbsp;</li>\n<li>Pacific ocean perch move off ocean bottom habitats during the day, following daily migrations of krill.&nbsp;</li>\n<li>Seabirds, other rockfish, salmon, lingcod, and other large bottom-dwelling fish feed on juveniles. Sablefish, halibut, and sperm whales feed on adult Pacific ocean perch.&nbsp;</li>\n</ul>\n',
    bycatch: 'Regulations are in place to minimize bycatch.',
    calories: '94',
    carbohydrate: null,
    cholesterol: '42 mg',
    color:
      '<p>Whole fish should have shiny and bright skin. The raw flesh is white, but turns opaque white when cooked.</p>\n',
    diseaseTreatmentandPrevention: null,
    diseasesinSalmon: null,
    displayedSeafoodProfileIllustration: null,
    ecosystemServices: null,
    environmentalConsiderations: null,
    environmentalEffects: null,
    farmingMethods: null,
    fatTotal: '1.63 g',
    feeds_: null,
    feeds: null,
    fiberTotalDietary: null,
    fishingRate: 'At recommended levels.',
    harvest:
      '<ul>\n<li>In 2018, commercial landings of Pacific ocean perch totaled more than 123.6&nbsp;million pounds and were valued at more than $25.8&nbsp;million.</li>\n<li>Gear types, habitat impacts, and bycatch:\n<ul>\n<li>Bottom trawls are primarily used to catch Pacific ocean perch, although pelagic trawls are also used.</li>\n<li>Bottom trawls can contact the ocean floor and impact habitats, depending on the type and sensitivity of the habitat and the size of the gear.</li>\n<li>Trawls cause minimal damage when targeting species over soft, sandy, or muddy ocean bottoms.</li>\n<li>For Alaska and the West Coast, NOAA Fisheries and the regional fishery management councils have implemented large closed areas to protect sensitive rocky, cold-water coral and sponge habitats from bottom trawls.</li>\n<li>In Alaska, trawl fishermen targeting Pacific ocean perch might incidentally catch Pacific cod, arrowtooth flounder, rockfish, and sablefish. Halibut, salmon, and crab may also be caught as bycatch.\n<ul>\n<li>Pacific cod and sablefish are generally retained due to their high commercial value.</li>\n<li><a href="https://www.npfmc.org/wp-content/PDFdocuments/bycatch/Bycatchflyer913.pdf">Bycatch limits</a> prevent too much bycatch of other species from being caught. If a target groundfish fishery exceeds a bycatch limit, the fishery may close for the remainder of the season.</li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>\n',
    harvestType: null,
    healthBenefits:
      '<p>Low in saturated fat and very high in selenium, phosphorous, and vitamin B12.</p>\n',
    human_Health_: null,
    humanHealth: null,
    physicalDescription:
      '<ul>\n<li>Pacific ocean perch are light red with several diffuse, olive-green patches on their upper backs where the body begins to narrow towards the tail fin. They also possess a prominent, cone-shaped knob on their lower jaw.</li>\n</ul>\n',
    production: null,
    protein: '18.62 g',
    quote:
      'U.S. wild-caught Pacific ocean perch is a smart seafood choice because it is sustainably managed and responsibly harvested under U.S. regulations.',
    quoteBackgroundColor: '#bd5c61',
    research: null,
    saturatedFattyAcidsTotal: '0.244 g',
    selenium: '43.3 mcg',
    servingWeight: null,
    servings: '1',
    sodium: '75 mg',
    source: '<p>U.S. wild-caught from Alaska to California.</p>\n',
    sugarsTotal: null,
    taste: '<p>Delicate, nutty flavor.</p>\n',
    texture: '<p>Lean, fairly firm, with a fine flake.</p>\n',
    path: '/profiles/pacific-ocean-perch',
    lastUpdate: '04/28/2020 - 11:21',
    href: 'https://line-ready-api.azurewebsites.net/fish/101',
    method: null,
    rel: null,
  },
  {
    id: 100,
    fisheryManagement:
      '<ul>\n<li><a href="https://www.westcoast.fisheries.noaa.gov/">NOAA Fisheries</a> and the <a href="https://www.pcouncil.org/">Pacific Fishery Management Council</a> manage the Pacific shortfin mako shark fishery on the West Coast.</li>\n<li>Managed under the <a href="https://www.pcouncil.org/highly-migratory-species/fishery-management-plan-and-amendments/">Fishery Management Plan for U.S. West Coast Fisheries for Highly Migratory Species</a>:\n<ul>\n<li>Permits are required to fish for highly migratory species, including shortfin mako sharks, and fishermen must maintain logbooks documenting their catch.</li>\n<li>Annual commercial harvest guidelines (a general objective for how much can be caught).</li>\n<li>Closed areas protect endangered turtles.</li>\n<li>Fishermen are required to take a training course on safe handling and release of protected species.</li>\n<li>Mandatory placement (about 20 percent coverage) of at-sea observers on commercial drift gillnet vessels to monitor catch, bycatch, and fishing effort.</li>\n<li>Fishing times and areas are tightly managed to reduce the risk of catching protected species, such as sea turtles, whales, and dolphins.&nbsp;</li>\n</ul>\n</li>\n<li><a href="https://www.fisheries.noaa.gov/region/pacific-islands">NOAA Fisheries</a> and the <a href="http://wpcouncil.org/">Western Pacific Regional Fishery Management Council</a> manage the Pacific shortfin mako shark fishery in the Pacific Islands.</li>\n<li>Managed under the <a href="https://www.wpcouncil.org/documents/FEPs/PacificPelagicFEP/December12005PelagicFEP.pdf">Fishery Ecosystem Plan for the Pelagic Fisheries of the Western Pacific</a>:\n<ul>\n<li>Entry to this fishery is limited to a maximum of 164 vessels.&nbsp;</li>\n<li>Permits and logbooks are required.&nbsp;</li>\n<li>Observers are required on all Hawaii-based longline vessels.&nbsp;</li>\n<li><a href="https://www.fisheries.noaa.gov/topic/enforcement/vessel-monitoring">NOAA Fisheries vessel monitoring system (VMS) program</a> requires longline boats to be equipped with a satellite transponder that provides real-time vessel position updates and tracks vessel movements.</li>\n<li>Longlines are prohibited in certain areas to protect endangered Hawaiian monk seals and reduce the potential for gear conflicts and localized stock depletion.&nbsp;</li>\n<li>Vessels operating under longline general permits must carry special gear to release incidentally hooked or entangled sea turtles. &nbsp;</li>\n<li>There are no management measures specific to Pacific shortfin mako shark, because in the Western Pacific they’re only harvested incidentally in the longline fishery for swordfish.&nbsp;</li>\n</ul>\n</li>\n<li>The <a href="https://www.fisheries.noaa.gov/national/laws-and-policies/shark-conservation-act">Shark Conservation Act</a> requires that all sharks, with one exception, be brought to shore with their fins naturally attached.</li>\n<li>Management of highly migratory species, like mako sharks, is complicated because the species migrate thousands of miles across international boundaries and are fished by many nations.&nbsp;\n<ul>\n<li>Two international organizations, the <a href="http://www.iattc.org/HomeENG.htm" rel="external">Inter-American Tropical Tuna Commission (IATTC)</a>&nbsp;and the <a href="https://www.wcpfc.int/" rel="external">Western and Central Pacific Fisheries Commission (WCPFC)</a>, manage highly migratory species, like sharks, internationally.</li>\n<li>No international measures are in place specific to shortfin mako sharks, but both organizations have passed shark conservation and management measures that combat shark finning practices and encourage further research and periodic stock assessment efforts for sharks.</li>\n</ul>\n</li>\n</ul>\n',
    habitat:
      '<ul>\n<li>Shortfin mako sharks live near the surface in tropical and temperate oceans.&nbsp;</li>\n<li>Juveniles are common in coastal waters, and adults are primarily found offshore. &nbsp;</li>\n<li>They are highly migratory and capable of swimming long distances across entire oceans.&nbsp;</li>\n</ul>\n',
    habitatImpacts:
      'Gear used to catch shortfin mako does not contact the ocean floor, so there is no impact to habitat.',
    imageGallery: null,
    location:
      '<ul>\n<li>In the eastern Pacific, they’re found from the Columbia River to Chile.&nbsp;</li>\n<li>Off the West Coast, they’re most common off California.&nbsp;</li>\n<li>In the Indo-Pacific, they are found from East Africa and the Red Sea to Hawaii.&nbsp;</li>\n</ul>\n',
    management: null,
    noaaFisheriesRegion: null,
    population: 'Above target population levels.',
    populationStatus:
      '<ul>\n<li>\n<p>According to the <a href="https://www.wcpfc.int/node/31025">2018 stock assessment</a>, North Pacific shortfin mako sharks are not overfished, and are not subject to overfishing.</p>\n</li>\n<li>\n<p><a href="http://isc.fra.go.jp/recommendation/isc18/isc18_shortfinmako.html">Stock Status and Conservation Information (From ISC18 Plenary Report)</a>.</p>\n</li>\n</ul>\n',
    scientificName: 'Isurus oxyrinchus',
    speciesAliases:
      '<a href="/species-aliases/mako-shark" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Mako shark</a>, <a href="/species-aliases/blue-pointer" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Blue pointer</a>, <a href="/species-aliases/bonito-shark" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Bonito shark</a>, <a href="/species-aliases/pacific-mako-shark" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Pacific mako shark</a>',
    speciesIllustrationPhoto: {
      src:
        'https://www.fishwatch.gov/sites/default/files/atlantic_shortfin_mako_shark.png',
      alt: 'Pacific Shortfin Mako Shark',
      title: 'Pacific Shortfin Mako Shark',
    },
    speciesName: 'Pacific Shortfin Mako Shark',
    animalHealth: null,
    availability: '<p>Fresh from August to January.</p>\n',
    biology:
      '<ul>\n<li>Shortfin mako sharks grow slowly and can grow up to 12 feet, although average size is 6 to 7 feet.</li>\n<li>They have a long lifespan, and can live up to 30 years.&nbsp;</li>\n<li>They do not reproduce until late in life, when males are about 8 years old and females are around 20 years old.&nbsp;</li>\n<li>They have a 3-year reproductive cycle, including a 15- to 18-month gestation period.&nbsp;</li>\n<li>Eggs are fertilized internally, and develop inside the mother. Pups are born alive, and are fairly large when born.</li>\n<li>They’re aggressive predators and feed near the top of the food chain on squid and pelagic fish (including swordfish, tuna, and other sharks).&nbsp;</li>\n<li>They have very few predators. Larger sharks and killer whales sometimes prey on younger, smaller shortfin makos.</li>\n</ul>\n',
    bycatch: 'Regulations are in place to minimize bycatch.',
    calories: '130',
    carbohydrate: null,
    cholesterol: '51 mg',
    color:
      '<p>Fresh, raw meat is an ivory-pink or muddy, reddish color. When cooked it is ivory white.</p>\n',
    diseaseTreatmentandPrevention: null,
    diseasesinSalmon: null,
    displayedSeafoodProfileIllustration: null,
    ecosystemServices: null,
    environmentalConsiderations: null,
    environmentalEffects: null,
    farmingMethods: null,
    fatTotal: '4.51 g',
    feeds_: null,
    feeds: null,
    fiberTotalDietary: null,
    fishingRate: 'At recommended levels.',
    harvest:
      '<ul>\n<li>In 2018, commercial landings of Pacific shortfin mako totaled 64,374 pounds and were valued at $52,748.\n<ul>\n<li>Most shortfin mako harvested come from the <a href="https://www.fishwatch.gov/profiles/atlantic-shortfin-mako-shark">Atlantic and Gulf of Mexico</a>.</li>\n</ul>\n</li>\n<li>Gear types and bycatch:\n<ul>\n<li>Harvested with drift gillnets off the West Coast and occasionally caught incidentally in longline fisheries for swordfish off Hawaii.&nbsp;</li>\n<li>Drift gillnets can incidentally catch other species, such as ocean sunfish and blue sharks.</li>\n<li>Protected species, such as sperm whales and sea turtles, may be caught as bycatch in drift gillnet fisheries.</li>\n<li>Managers limit where and when drift gillnet fishermen can fish to help prevent bycatch. Logbooks and observer programs help monitor bycatch.&nbsp;</li>\n<li>The California thresher shark gillnet fishery is a <a href="https://www.fisheries.noaa.gov/national/marine-mammal-protection/marine-mammal-protection-act-list-fisheries">Category I fishery</a>, meaning it has frequent incidental mortality or serious injury of marine mammals. Mako sharks may be caught in this fishery.\n<ul>\n<li>NOAA Fisheries works with the federally appointed <a href="https://www.fisheries.noaa.gov/national/marine-mammal-protection/marine-mammal-take-reduction-plans-and-teams">Pacific Offshore Cetacean Take Reduction Team</a> to develop measures that reduce the impacts of this fishery on certain marine mammals.</li>\n</ul>\n</li>\n<li>Fishermen must use acoustic devices that emit high-pitched noises to deter marine mammals, and net extenders to increase minimum fishing depth on drift gillnet gear, to protect marine mammals.</li>\n<li>Off Hawaii, gear restrictions and area closures help minimize impacts to sharks, marlins, and protected species that can be caught in longline gear.&nbsp;</li>\n<li>Safe handling techniques help reduce impacts on sea turtles and seabirds caught in the longline fishery in Hawaii.&nbsp;</li>\n<li>Scientists and managers continue to monitor bycatch in these fisheries through logbooks and vessel observer programs. &nbsp;</li>\n</ul>\n</li>\n<li>Shortfin mako are considered one of the great game fish of the world and are a popular catch in shark tournaments.&nbsp;</li>\n<li>Recreational charter vessel operators must keep logbooks documenting their catch, and there is a limit on the number of mako sharks recreational fishermen can catch.</li>\n</ul>\n',
    harvestType: null,
    healthBenefits:
      '<p>High in protein and low in fat, and a good source of niacin, vitamins B6 and B12, phosphorous, and selenium. More information on <a href="https://www.fishwatch.gov/eating-seafood/health">health and seafood</a>.</p>\n',
    human_Health_: null,
    humanHealth: null,
    physicalDescription:
      '<ul>\n<li>Shortfin mako sharks have pointed snouts and long gill slits.&nbsp;</li>\n<li>They have dark blue-gray backs, light metallic blue sides, and white undersides. &nbsp;</li>\n<li>Their teeth are conical and pointy and protrude forward from the jaw, making them visible even when their mouth is closed.&nbsp;</li>\n<li>They can be easily confused with the longfin mako shark (<em>Isurus paucus</em>).</li>\n</ul>\n',
    production: null,
    protein: '20.98 g',
    quote:
      'U.S. wild-caught Pacific shortfin mako shark is a smart seafood choice because it is sustainably managed and responsibly harvested under U.S. regulations.',
    quoteBackgroundColor: '#7b9abf',
    research: null,
    saturatedFattyAcidsTotal: '0.925 g',
    selenium: '36.5 mcg',
    servingWeight: null,
    servings: '1',
    sodium: '79 mg',
    source: '<p>U.S. wild-caught from California and Hawaii.</p>\n',
    sugarsTotal: null,
    taste: '<p>Sweet with a full-bodied, meaty taste.</p>\n',
    texture: '<p>Soft when raw, firm once cooked.</p>\n',
    path: '/profiles/pacific-shortfin-mako-shark',
    lastUpdate: '05/13/2020 - 09:05',
    href: 'https://line-ready-api.azurewebsites.net/fish/100',
    method: null,
    rel: null,
  },
  {
    id: 99,
    fisheryManagement:
      '<ul>\n<li><a href="http://www.greateratlantic.fisheries.noaa.gov/sustainable/species/clam/">NOAA Fisheries</a>, the <a href="http://www.mafmc.org/">Mid-Atlantic Fishery Management Council</a>, and state resource management agencies manage the surfclam fishery.</li>\n<li>Managed under the <a href="http://www.mafmc.org/surfclams-quahogs/">Surfclam-Ocean Quahog Fishery Management Plan</a>:\n<ul>\n<li>Fishermen must have a permit to harvest surfclams.</li>\n<li>Individual transferable quota (<a href="https://www.fisheries.noaa.gov/national/laws-and-policies/catch-shares">catch shares</a>) program – managers set an annual catch limit for federal waters and allocate it among individual fishermen or vessel owners. These quotas can be sold or leased.</li>\n<li>Minimum size, which can be suspended by managers if they can demonstrate the harvest of small surfclams is below a certain threshold.</li>\n<li>Closed areas due to environmental degradation or to toxins that cause paralytic shellfish poisoning (PSP).</li>\n<li>Fishermen harvesting surfclams from Georges Bank have additional requirements under the PSP testing protocol.</li>\n<li>Mandatory vessel monitoring systems.</li>\n<li>Fishermen must maintain and submit logbooks of each fishing trip to document catch.</li>\n</ul>\n</li>\n<li>Surfclams support valuable fisheries in <a href="http://www.state.nj.us/dep/fgw/shelhome.htm" rel="external">New Jersey</a>&nbsp;and <a href="http://www.dec.ny.gov/outdoor/345.html" rel="external">New York</a>&nbsp;state waters (within 3 miles of shore); state authorities are responsible for managing these fisheries.</li>\n</ul>\n',
    habitat:
      '<ul>\n<li>Juveniles burrow in medium- to fine-grain sand in waters 30 to 80 feet deep.</li>\n<li>Adults prefer medium- to coarse-grain sand and gravel from beach zones to over 160 feet deep.</li>\n<li>Surfclams prefer more turbulent waters and bury themselves just below the sediment surface.</li>\n</ul>\n',
    habitatImpacts:
      'Fishing gear used to harvest surfclams has negative impacts to habitat, but the fishery is managed to minimize these impacts, particularly to sensitive habitat.',
    imageGallery: null,
    location:
      '<ul>\n<li>Atlantic surfclams are found in the western North Atlantic from the southern Gulf of St. Lawrence to Cape Hatteras, North Carolina.</li>\n<li>They’re most abundant on Georges Bank, the south shore of Long Island, New Jersey, and the Delmarva Peninsula.</li>\n</ul>\n',
    management: null,
    noaaFisheriesRegion: null,
    population: 'Above target population level.',
    populationStatus:
      '<ul>\n<li>According to the <a href="https://www.nefsc.noaa.gov/publications/crd/crd1613/crd1613.pdf">2016&nbsp;stock assessment</a> the surfclam stock is not overfished and is not subject to overfishing.</li>\n</ul>\n',
    scientificName: 'Spisula solidissima',
    speciesAliases:
      '<a href="/species-aliases/surfclam" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Surfclam</a>, <a href="/species-aliases/hen-clam" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Hen clam</a>, <a href="/species-aliases/bar-clam" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Bar clam</a>, <a href="/species-aliases/sea-clam" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Sea clam</a>',
    speciesIllustrationPhoto: {
      src:
        'https://www.fishwatch.gov/sites/default/files/atlantic_surfclam_0.png',
      alt: 'Atlantic surfclam',
      title: 'Atlantic surfclam',
    },
    speciesName: 'Atlantic Surfclam',
    animalHealth: null,
    availability:
      '<p>Year-round. Sold processed, rather than live, in fresh, frozen, and canned products such as breaded clam strips, minced clams, stuffed clams, chowders, and broth.</p>\n',
    biology:
      '<ul>\n<li>Surflclams can live up to 35 years.</li>\n<li>On average, surfclams living in open water live longer than those living inshore.</li>\n<li>Surfclams grow fast, reaching a harvestable size of about 5 inches in 5 to 7 years.</li>\n<li>Growth rates depend on water temperature—southern surfclam populations in warmer water grow more slowly than the more northern populations.</li>\n<li>Some are able to reproduce by age 1, but most spawn by the end of their second year.</li>\n<li>Surfclams spawn from late spring through early fall.</li>\n<li>They shed their eggs and sperm directly into the water column.</li>\n<li>Larvae spend about 3 weeks in the water column as plankton before settling to the bottom to live.</li>\n<li>Surfclams are planktivorous filter feeders, straining tiny plants out of the water to eat.</li>\n<li>Larval surfclams eat algal cells.</li>\n<li>Adults primarily feed on diatoms, green algae, and naked flagellates.</li>\n<li>Snails, crabs, shrimp, and fish, including haddock and cod, feed on surfclams.</li>\n</ul>\n',
    bycatch:
      'Fishing gear used to harvest surfclams is designed to minimize bycatch.',
    calories: '74',
    carbohydrate: null,
    cholesterol: '34 mg',
    color:
      '<p>The raw meat is whitish-orange. Cooked meat ranges from ivory to golden yellow, with some dark areas.</p>\n',
    diseaseTreatmentandPrevention: null,
    diseasesinSalmon: null,
    displayedSeafoodProfileIllustration: null,
    ecosystemServices: null,
    environmentalConsiderations: null,
    environmentalEffects: null,
    farmingMethods: null,
    fatTotal: '0.97 g',
    feeds_: null,
    feeds: null,
    fiberTotalDietary: null,
    fishingRate: 'At recommended level.',
    harvest:
      '<ul>\n<li>More than 39&nbsp;million pounds of surfclam meats were harvested in 2017&nbsp;in both state and federal waters, valued at more than&nbsp;$32&nbsp;million.</li>\n<li>Surfclams are the most important commercial clam species harvested in the United States.</li>\n<li>Commercial fishermen harvest surfclams with hydraulic clam dredges—essentially large, heavy sleds pulled along the sea floor. High-pressure jets blast water into the sediment, which temporarily liquefies it and allows a steel blade to pass through the first few inches of substrate and scoop the clams onto the dredge, where they are captured in a cage made of steel bars.</li>\n<li>Atlantic surfclams burrow into sandy bottoms on the continental shelf, an environment that is thought to recover quickly after a hydraulic clam dredge passes over it.</li>\n<li>The bars on commercial clam dredges are spaced several inches apart so they do not collect anything but the targeted surfclams.</li>\n<li>The surfclam fishery is managed under an individual transferable quota program that provides fishermen with more flexibility on when to fish, slows the pace of the fishery, and increases its efficiency, significantly reducing bycatch.</li>\n</ul>\n',
    harvestType: null,
    healthBenefits:
      '<p>Surfclams provide low-fat, high-quality protein and are an excellent source of selenium and niacin.</p>\n',
    human_Health_: null,
    humanHealth: null,
    physicalDescription:
      '<ul>\n<li>Surfclams are the largest bivalves found in the western North Atlantic.</li>\n<li>They grow up to 8.9 inches, although clams larger than 7.9 inches are rare.</li>\n<li>Their shells are thick, triangular, and yellowish-white with rounded edges and concentric ridges.</li>\n<li>Shells do not close fully and gape slightly.</li>\n</ul>\n',
    production: null,
    protein: '12.77 g',
    quote:
      'U.S. wild-caught Atlantic surfclam is a smart seafood choice because it is sustainably managed and responsibly harvested under U.S. regulations.',
    quoteBackgroundColor: '#B7B2AC',
    research: null,
    saturatedFattyAcidsTotal: '0.094 g',
    selenium: '24.3 mcg',
    servingWeight: null,
    servings: '1',
    sodium: '56 mg',
    source:
      '<p>U.S. wild-caught from New England to North Carolina. The United States is the only source of Atlantic surfclams.</p>\n',
    sugarsTotal: null,
    taste: '<p>When cooked, the white meat is mild and sweet.</p>\n',
    texture: '<p>Chewy.</p>\n',
    path: '/profiles/atlantic-surfclam',
    lastUpdate: '07/08/2019 - 16:40',
    href: 'https://line-ready-api.azurewebsites.net/fish/99',
    method: null,
    rel: null,
  },
  {
    id: 98,
    fisheryManagement:
      '<ul>\n<li>The <a href="http://www.asmfc.org/" rel="external">Atlantic States Marine Fisheries Commission</a> manages the striped bass stock, which inhabits all coastal and estuarine areas from Maine through Virginia, and the coastal areas of North Carolina. Estuarine striped bass stocks in North Carolina are managed as non-coastal migratory stocks by the State of North Carolina under the auspices of the Commission.</li>\n<li><a href="http://uscode.house.gov/view.xhtml?path=/prelim@title16/chapter71A&amp;edition=prelim">The Atlantic Striped Bass Conservation Act </a>and the&nbsp;<a href="http://uscode.house.gov/view.xhtml?path=/prelim@title16/chapter71&amp;edition=prelim">Atlantic Coastal Fisheries Cooperative Management Act</a>&nbsp;direct state and federal conservation and management efforts for this population. Both Acts contain provisions to impose a federal moratorium on striped bass fishing in states that fail to comply with the Commission’s management plan. The Secretaries of Commerce and the Interior are required to provide biennial reports to Congress and the Commission on studies of the Atlantic striped bass resource.</li>\n<li>Managed under the&nbsp;<a href="http://www.asmfc.org/species/atlantic-striped-bass" rel="external">Interstate Fishery Management Plan for Atlantic Striped Bass</a>.\n<ul>\n<li>Harvest limits are set at a level that will conserve the striped bass spawning stock so the resource can continue to replace harvested fish. Researchers have determined that the minimum age for female striped bass to reproduce is between the ages of 4 and 8 years. Managers set the target population levels for this species based on the size of the female spawning stock.</li>\n<li>In state waters, the commercial fishery is currently managed with:\n<ul>\n<li>State-by-state catch quotas that limit the amount of fish that can be caught.</li>\n<li>Minimum size limits to protect younger striped bass so they can grow, mature, and reproduce.</li>\n<li>Gear restrictions.</li>\n<li>Seasonal fishery closures, mainly to protect spawning fish.</li>\n<li>Bycatch monitoring and research programs.</li>\n</ul>\n</li>\n<li>In state waters, the recreational fishery is managed with:\n<ul>\n<li>Minimum size and bag limits.</li>\n<li>Seasonal fishery closures.</li>\n</ul>\n</li>\n<li>Federal waters (between 3 and 200 miles offshore) remain closed to all commercial and recreational fishing for Atlantic striped bass.</li>\n</ul>\n</li>\n</ul>\n',
    habitat:
      '<ul>\n<li>Striped bass are anadromous (they live in the ocean but return to freshwater to spawn).</li>\n<li>In the spring, mature striped bass migrate back to fresh or brackish water to spawn.</li>\n<li>Larvae drift downstream toward their nursery areas in river deltas and the inland portions of the coastal sounds and estuaries.</li>\n<li>Juveniles typically remain in estuaries for 2 to 4 years and then migrate out to the Atlantic Ocean.</li>\n<li>Some spend the majority of their adult life in rivers or coastal estuaries.</li>\n<li>Some spend their adult life in the ocean, migrating north and south seasonally and ascending to rivers to spawn in the spring. Striped bass tagged in the Chesapeake Bay have been caught in Canadian waters.</li>\n</ul>\n',
    habitatImpacts:
      'Fishing gears used to harvest striped bass have minimal impacts on habitat.',
    imageGallery: null,
    location:
      '<ul>\n<li>Striped bass live along the East Coast from the St. Lawrence River in Canada to St. John’s River in Florida, and in the Gulf of Mexico from Florida to Louisiana.</li>\n<li>They were introduced to inland lakes and reservoirs and to the West Coast, where they’re now found from Mexico to British Columbia.</li>\n</ul>\n',
    management: null,
    noaaFisheriesRegion: null,
    population:
      'Significantly below target levels and fishing rate promotes population growth.',
    populationStatus:
      '<ul>\n<li>According to the <a href="https://www.nefsc.noaa.gov/publications/crd/crd1901/">2018&nbsp;stock assessment</a>,&nbsp;Atlantic striped bass are overfished and subject to overfishing.</li>\n<li><a href="http://www.asmfc.org/uploads/file/5cc9ba4eAtlStripedBassStockAssessmentOverview.pdf" rel="external">ASMFC’s Stock Assessment Overview</a> provides a summary of the 2018 benchmark stock assessment for Atlantic striped bass, including an overview of management, the types of data used, and how the data were analyzed.</li>\n</ul>\n',
    scientificName: 'Morone saxatilis',
    speciesAliases:
      '<a href="/species-aliases/bass" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Bass</a>, <a href="/species-aliases/rockfish" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Rockfish</a>, <a href="/species-aliases/striper" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Striper</a>, <a href="/species-aliases/linesider" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Linesider</a>',
    speciesIllustrationPhoto: {
      src:
        'https://www.fishwatch.gov/sites/default/files/atlantic_striped_bass_0.png',
      alt: 'Illustration of Atlantic Striped Bass',
      title: 'Illustration of Atlantic Striped Bass',
    },
    speciesName: 'Atlantic Striped Bass',
    animalHealth: null,
    availability:
      '<p>Available both frozen and fresh year-round, depending on the area.</p>\n',
    biology:
      '<ul>\n<li>Striped bass have a fairly long life, up to 30 years.</li>\n<li>Growth depends on where they live.</li>\n<li>Striped bass can grow up to 5 feet in length and 77 pounds.</li>\n<li>Males are sexually mature between the ages of 2 and 4 years old.</li>\n<li>Females are able to reproduce when they are 4 to 8 years old.</li>\n<li>Females produce large quantities of eggs, which are fertilized by males as they are released.</li>\n<li>Larval striped bass feed on zooplankton (microscopic animals).</li>\n<li>Juveniles eat insect larvae, small crustaceans, mayflies, and other larval fish.</li>\n<li>Adults are piscivorous (fish-eating) and eat almost any kind of small fish as well as several invertebrates, particularly crabs and squid.</li>\n<li>Bluefish, weakfish, cod, and silver hake prey on small striped bass.</li>\n<li>Adults have few predators, with the exception of seals and sharks.</li>\n</ul>\n',
    bycatch: 'Regulations are in place to minimize bycatch.',
    calories: '97',
    carbohydrate: null,
    cholesterol: '80 mg',
    color: '<p>Light-colored meat.</p>\n',
    diseaseTreatmentandPrevention: null,
    diseasesinSalmon: null,
    displayedSeafoodProfileIllustration: null,
    ecosystemServices: null,
    environmentalConsiderations: null,
    environmentalEffects: null,
    farmingMethods: null,
    fatTotal: '2.33 g',
    feeds_: null,
    feeds: null,
    fiberTotalDietary: null,
    fishingRate:
      'Reduced to end overfishing. Managers are exploring alternative coast-wide measures to address overfishing. There is a moratorium in federal waters.',
    harvest:
      '<ul>\n<li>Commercial fishery:\n<ul>\n<li>In 2017, commercial landings of striped bass (from state waters) totaled more than 5 million pounds and were valued at more than $23.3&nbsp;million.</li>\n</ul>\n</li>\n<li>Gear types, habitat impacts, and bycatch:\n<ul>\n<li>Commercial fishermen use gear types that have minimal impact on habitat—gill nets, hook-and-line, pound nets, seines, and trawls.</li>\n<li>Most striped bass are caught in recreational fisheries, using mainly hook-and-line gear with little or no impact on habitat.</li>\n<li>Gillnets can incidentally capture protected species, such as sea turtles, large whales (right, humpback, and fin whales), harbor porpoise, dolphins, and Atlantic sturgeon.</li>\n<li>Federal regulations are in place to prevent bycatch of protected species.</li>\n</ul>\n</li>\n<li>Recreational fishery:\n<ul>\n<li>The recreational harvest of striped bass regularly exceeds the commercial harvest.</li>\n<li>In 2018, recreational harvest of striped bass totaled more than 23.7&nbsp;million pounds.</li>\n</ul>\n</li>\n</ul>\n',
    harvestType: null,
    healthBenefits:
      '<p>Striped bass is a good source of low-fat protein and selenium. <a href="https://www.epa.gov/fish-tech">Consumption advisories</a>&nbsp;for striped bass vary from state to state.</p>\n',
    human_Health_: null,
    humanHealth: null,
    physicalDescription:
      '<ul>\n<li>Striped bass have stout bodies with seven to eight continuous horizontal stripes on each side, from their gills to their tail.</li>\n<li>They are light green, olive, steel blue, black, or brown on top, with a white or silver iridescent underside.</li>\n</ul>\n',
    production: null,
    protein: '17.73 g',
    quote:
      'U.S. wild-caught Atlantic striped bass is a smart seafood choice because it is sustainably managed and responsibly harvested under U.S. regulations.',
    quoteBackgroundColor: '#817b62',
    research: null,
    saturatedFattyAcidsTotal: '0.507 g',
    selenium: '36.5 mcg',
    servingWeight: null,
    servings: '1',
    sodium: '69 mg',
    source:
      '<p>U.S. wild-caught from Maine to North Carolina, and farmed.</p>\n',
    sugarsTotal: null,
    taste:
      '<p>Both wild-caught and farmed striped bass have a slightly sweet flavor.</p>\n',
    texture: '<p>Firm, with large flakes.</p>\n',
    path: '/profiles/atlantic-striped-bass',
    lastUpdate: '05/17/2019 - 10:23',
    href: 'https://line-ready-api.azurewebsites.net/fish/98',
    method: null,
    rel: null,
  },
  {
    id: 97,
    fisheryManagement:
      '<ul>\n<li><a href="http://www.westcoast.fisheries.noaa.gov/">NOAA Fisheries</a> and the <a href="http://www.pcouncil.org/">Pacific Fishery Management Council</a> manage the lingcod fishery on the West Coast.</li>\n<li>Managed under the <a href="http://www.pcouncil.org/wp-content/uploads/GF_FMP_FINAL_May2014.pdf">Pacific Coast Groundfish Fishery Management Plan</a>:\n<ul>\n<li>Size limits and trip limits.</li>\n<li>Certain seasons and <a href="http://www.westcoast.fisheries.noaa.gov/fisheries/management/groundfish_closures/groundfish_closed_areas.html">areas</a> are closed to fishing.</li>\n<li>Gear restrictions help reduce bycatch and impacts on habitat.</li>\n<li>A <a href="http://www.westcoast.fisheries.noaa.gov/fisheries/groundfish_catch_shares/index.html">trawl rationalization catch share program</a> includes:\n<ul>\n<li>Catch limits based on the health of each fish stock and divided into shares that are allocated to individual fishermen or groups.</li>\n<li>Provisions that allow fishermen to decide how and when to catch their share.</li>\n</ul>\n</li>\n</ul>\n</li>\n<li>The State of Alaska manages the lingcod fishery in both state and federal waters in Alaska through the <a href="http://www.adfg.alaska.gov/index.cfm?adfg=lingcod.management" rel="external">Alaska Department of Fish and Game Commercial Fisheries Regulations for Lingcod</a>. Regulations include:\n<ul>\n<li>Closing the fishery during spawning and nesting seasons to protect spawning female lingcod and nest-guarding male lingcod.</li>\n<li>Limits on the minimum size of fish that can be caught to protect immature fish from being harvested and allow fish to spawn at least once before being subject to harvest.</li>\n<li>Restricting catch through catch and bycatch quotas.</li>\n</ul>\n</li>\n</ul>\n',
    habitat:
      '<ul>\n<li>Larvae live near the surface of the ocean. Juveniles settle on nearshore sandy ocean bottoms near eelgrass or kelp beds.</li>\n<li>Young adults and adults move to rocky habitats or seaweed, kelp, and eelgrass beds, where food is abundant.</li>\n<li>Male lingcod don’t generally move far from where they’re born, but researchers have found that immature fish sometimes migrate more than 60 miles and females migrate seasonally to spawn.&nbsp;</li>\n</ul>\n',
    habitatImpacts:
      'Time and area closures and gear restrictions protect habitats that are affected by some types of fishing gear used to harvest lingcod.',
    imageGallery: null,
    location:
      '<ul>\n<li>Lingcod are found from Kodiak Island in the Gulf of Alaska down to Baja California, but they’re most abundant near British Columbia and Washington.</li>\n</ul>\n',
    management: null,
    noaaFisheriesRegion: null,
    population:
      'Above target population levels along the Northern Pacific coast. Near target levels and fishing rate promotes population growth along the Southern Pacific coast.',
    populationStatus:
      '<ul>\n<li>According to the <a href="https://www.pcouncil.org/wp-content/uploads/2018/07/Lingcod_2017_Complete_Final.pdf">2017 stock assessment</a>, Southern Pacific coast lingcod and Northern Pacific coast lingcod&nbsp;are not overfished.</li>\n<li>Southern Pacific coast and Northern Pacific coast lingcod&nbsp;are not subject to overfishing based on <a href="https://www.nwfsc.noaa.gov/research/divisions/fram/observation/data_products/species_management.cfm">2018&nbsp;catch data</a>.</li>\n<li>There are currently no sufficient estimates of the abundance of lingcod in Alaska.</li>\n</ul>\n',
    scientificName: 'Ophiodon elongatus',
    speciesAliases:
      '<a href="/species-aliases/cultus-cod" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Cultus cod</a>, <a href="/species-aliases/blue-cod" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Blue cod</a>, <a href="/species-aliases/bluefish" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Bluefish</a>, <a href="/species-aliases/green-cod" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Green cod</a>, <a href="/species-aliases/buffalo-cod" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Buffalo cod</a>, <a href="/species-aliases/greenling" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Greenling</a>, <a href="/species-aliases/white-cod" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">White cod</a>',
    speciesIllustrationPhoto: {
      src: 'https://www.fishwatch.gov/sites/default/files/lingcod.png',
      alt: 'Illustration of a lingcod',
      title: 'Illustration of Lingcod',
    },
    speciesName: 'Lingcod',
    animalHealth: null,
    availability: '<p>Year-round.</p>\n',
    biology:
      '<ul>\n<li>Lingcod grow quickly, up to 5 feet and 80 pounds, and can live more than 20 years.</li>\n<li>Males sexually mature when they are about 2 years old and almost 20 inches long.</li>\n<li>Females are able to reproduce when they are 3 years old and 30 inches long.</li>\n<li>In late fall, male lingcod gather and become territorial over areas suitable for spawning, usually shallow, rocky habitats.</li>\n<li>Mature females are rarely seen at these spawning grounds. Scientists believe that the females briefly visit these spawning areas during winter and spring and only stay long enough to deposit their eggs in crevices and under ledges.\n<ul>\n<li>Males guard the nests for 8 to 10 weeks until the eggs hatch. The presence of a male to guard the nest from predators appears essential for successful spawning. If something happens to the male, an unguarded nest can be decimated within 48 hours by feeding rockfish, starfish, sculpins, kelp greenling, and cod.</li>\n</ul>\n</li>\n<li>Larvae feed on zooplankton (tiny floating animals), including krill and larval crustaceans such as lobster and crab. Juveniles feed on small fish.</li>\n<li>Adults are aggressive predators and feed primarily on bottom-dwelling fish (including smaller lingcod), squid, octopi, and crab.</li>\n<li>Marine mammals, sharks, and larger lingcod prey on juvenile and adult lingcod.</li>\n</ul>\n',
    bycatch:
      'Regulations prohibit fishing in certain areas to protect sensitive fish populations.',
    calories: '85',
    carbohydrate: null,
    cholesterol: '52 mg',
    color: '<p>Blue-green tint when raw, but is snow white once cooked.</p>\n',
    diseaseTreatmentandPrevention: null,
    diseasesinSalmon: null,
    displayedSeafoodProfileIllustration: null,
    ecosystemServices: null,
    environmentalConsiderations: null,
    environmentalEffects: null,
    farmingMethods: null,
    fatTotal: '1.06 g',
    feeds_: null,
    feeds: null,
    fiberTotalDietary: null,
    fishingRate: 'At recommended level.',
    harvest:
      '<ul>\n<li>Commercial fishery:\n<ul>\n<li>In 2018, commercial landings of lingcod totaled more than 1.5&nbsp;million pounds and were valued at more than $2.1 million.</li>\n</ul>\n</li>\n<li>Gear types, habitat impacts, and bycatch:\n<ul>\n<li>On the West Coast, lingcod are typically harvested with other groundfish in the trawl fishery.\n<ul>\n<li>Lingcod are also harvested incidentally in bottom longline and salmon troll fisheries.</li>\n<li>Trawls that are used to harvest lingcod can contact the ocean floor and impact habitats, depending on the makeup of the ocean bottom and the size of the gear.</li>\n<li>Trawls cause minimal damage when targeting lingcod over soft, sandy, or muddy ocean bottoms.</li>\n<li>Some areas are closed to certain gear types to protect sensitive habitat and species.</li>\n<li>Area closures, reduced trip limits, non-retention rules, gear restrictions, and variable catch limits are used to help minimize impact to overfished rockfish species and prevent bycatch.</li>\n<li>Charterboat fishermen in Washington have successfully used alternate bait (large flatfish) to reduce yelloweye rockfish bycatch when targeting lingcod.</li>\n</ul>\n</li>\n<li>In Alaska, lingcod have been harvested for centuries by the indigenous coastal populations of Southeast, Southcentral, and Western Alaska.\n<ul>\n<li>Lingcod were traditionally caught for subsistence use with hooks made of wood or bone.</li>\n<li>Today, lingcod are still fished for subsistence use but are also harvested in commercial fisheries in southeast Alaska with longlines, trolls, and jigs.</li>\n</ul>\n</li>\n</ul>\n</li>\n<li>Recreational fishery:\n<ul>\n<li>Recreational fishing for lingcod occurs on the West Coast and Alaska.</li>\n<li>Due to high levels of yelloweye rockfish bycatch in West Coast hook-and-line recreational fisheries, recreational harvest needs to be carefully managed.</li>\n<li>Fish must be a certain size to be retained, and there are limits on the number of fish that sport fishermen can keep each day.</li>\n<li>In Alaska recreational fishing for lingcod is closed during spawning and nesting seasons.</li>\n</ul>\n</li>\n</ul>\n',
    harvestType: null,
    healthBenefits:
      '<p>Lingcod is a good source of low-fat protein and is high in vitamin B12 and selenium.</p>\n',
    human_Health_: null,
    humanHealth: null,
    physicalDescription:
      '<ul>\n<li>Lingcod are dark gray, brown, or greenish on the back with some copper-colored mottling or spotting along the upper back.</li>\n<li>Nicknamed “buckethead,” the lingcod has a large head and mouth, and 18 large, sharp teeth.</li>\n<li>Lingcod have long bodies that narrow toward the tail.&nbsp;</li>\n</ul>\n',
    production: null,
    protein: '17.66 g',
    quote:
      'U.S. wild-caught lingcod is a smart seafood choice because it is sustainably managed and responsibly harvested under U.S. regulations.',
    quoteBackgroundColor: '#a87455',
    research: null,
    saturatedFattyAcidsTotal: '0.197 g',
    selenium: '36.5 mcg',
    servingWeight: null,
    servings: '1',
    sodium: '59 mg',
    source: '<p>U.S. wild-caught from Alaska to California.</p>\n',
    sugarsTotal: null,
    taste: '<p>A mild-tasting fish.</p>\n',
    texture: '<p>A tender fish with large flakes.</p>\n',
    path: '/profiles/lingcod',
    lastUpdate: '03/19/2020 - 13:49',
    href: 'https://line-ready-api.azurewebsites.net/fish/97',
    method: null,
    rel: null,
  },
  {
    id: 96,
    fisheryManagement:
      '<ul>\n<li><a href="https://www.westcoast.fisheries.noaa.gov/">NOAA Fisheries</a> and the <a href="https://www.pcouncil.org/">Pacific Fishery Management Council</a> manage this fishery.</li>\n<li>Northern anchovies are managed under the <a href="https://www.pcouncil.org/coastal-pelagic-species/fishery-management-plan-and-amendments/">Coastal Pelagic Species Fishery Management Plan</a>:\n<ul>\n<li>Monitored through landings data. If landings increase significantly, or exceed the annual catch limit, then managers may make management changes.</li>\n<li>Limits on the number and capacity of vessels in the fishery.</li>\n<li>Regulations to reduce bycatch.</li>\n</ul>\n</li>\n</ul>\n<ul>\n<li>Federal management is coordinated with state fisheries management agencies so that regulations are consistent in state waters (within 3 miles of shore). All states follow federal regulations but some have additional regulations.</li>\n</ul>\n',
    habitat:
      '<ul>\n<li>Anchovies form large, dense schools near the ocean surface.</li>\n<li>Anchovy schools move short distances along the shore and offshore.</li>\n</ul>\n',
    habitatImpacts:
      'The gear used to catch northern anchovies is used at the surface and has little impact on habitat.',
    imageGallery: null,
    location:
      '<ul>\n<li>Northern anchovies are found from British Columbia to Baja California and in the Gulf of California.</li>\n<li>Northern anchovies are divided into two sub-populations in the United States:\n<ul>\n<li>The northern sub-population is found off Oregon and Washington.</li>\n<li>The central sub-population ranges from California to Baja California, Mexico.</li>\n</ul>\n</li>\n</ul>\n',
    management: null,
    noaaFisheriesRegion: null,
    population:
      'Although northern anchovies are thought to be abundant, the population levels are unknown.',
    populationStatus:
      '<ul>\n<li>Formal stock assessments are not conducted for either the northern or central subpopulations of anchovies, but data is collected to help monitor the populations.</li>\n<li>The northern sub-population has never been formally assessed, but is thought to be abundant, and has a defined overfishing limit.</li>\n<li>The central sub-population was last assessed in 1995, and has a defined overfishing limit.</li>\n</ul>\n',
    scientificName: 'Engraulis mordax',
    speciesAliases:
      '<a href="/species-aliases/anchovy" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Anchovy</a>, <a href="/species-aliases/north-pacific-anchovy" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">North Pacific anchovy</a>, <a href="/species-aliases/california-anchovy" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">California anchovy</a>',
    speciesIllustrationPhoto: {
      src: 'https://www.fishwatch.gov/sites/default/files/northern_anchovy.png',
      alt: 'Illustration of a northern anchovy',
      title: 'Northern Anchovy',
    },
    speciesName: 'Northern Anchovy',
    animalHealth: null,
    availability: '<p>Year-round.</p>\n',
    biology:
      '<ul>\n<li>Northern anchovies grow quickly, up to about 7 inches.</li>\n<li>They have a short life cycle; they are able to spawn after 2 years and rarely live longer than 4 years.</li>\n<li>They have high natural mortality; each year 45 to 55 percent of the total stock would die of natural causes if no fishing occurred.</li>\n<li>Northern anchovies spawn throughout the year, with peak activity from February to April.</li>\n<li>Females release batches of eggs every 7 to 10 days. The eggs hatch in 2 to 4 days, depending on the temperature of the water.</li>\n<li>Northern anchovies feed on plankton (tiny floating plants and animals).</li>\n<li>They are an important part of the food chain for other fish species, including many recreationally and commercially important fish, as well as birds and marine mammals.</li>\n</ul>\n',
    bycatch: 'Bycatch is low because the gear is selective.',
    calories: '131',
    carbohydrate: null,
    cholesterol: '60 mg',
    color:
      '<p>Canned anchovies packed in oil are blush red, a result of the salt-curing process. The meat of unprocessed anchovies is gray and becomes off-white when cooked.</p>\n',
    diseaseTreatmentandPrevention: null,
    diseasesinSalmon: null,
    displayedSeafoodProfileIllustration: null,
    ecosystemServices: null,
    environmentalConsiderations: null,
    environmentalEffects: null,
    farmingMethods: null,
    fatTotal: '4.84 g',
    feeds_: null,
    feeds: null,
    fiberTotalDietary: null,
    fishingRate: 'At recommended levels.',
    harvest:
      '<ul>\n<li>In 2017, commercial landings of northern anchovy totaled more than 12.3&nbsp;million pounds and were valued at more than $857,000.</li>\n<li>Northern anchovies are generally harvested in the United States with round haul gear.</li>\n<li>Northern anchovies have been fished off the West Coast since at least 1916. The fishery was small until the Pacific sardine fishery collapsed in the 1940s and 1950s. Processors began canning anchovies instead of sardines, and fishermen started harvesting more anchovies.</li>\n<li>Consumer demand for anchovies decreased after the sardine population recovered, and the commercial fishery for northern anchovies gradually declined.</li>\n<li>Today, northern anchovies are used mainly for bait in other fisheries and sometimes processed into fish meal.</li>\n</ul>\n',
    harvestType: null,
    healthBenefits:
      '<p>Anchovies are high in calcium, iron, niacin, phosphorus, and selenium but are also high in cholesterol.</p>\n',
    human_Health_: null,
    humanHealth: null,
    physicalDescription:
      '<ul>\n<li>Northern anchovies are small, compressed fish with long snouts that overhang a large mouth.</li>\n<li>They are bluish-green above and silvery below, and adults have a faint silver stripe on the side.&nbsp;</li>\n</ul>\n',
    production: null,
    protein: '20.35 g',
    quote:
      'U.S. wild-caught northern anchovies are a smart seafood choice because they are sustainably managed and responsibly harvested under U.S. regulations.',
    quoteBackgroundColor: '#b5c4ca',
    research: null,
    saturatedFattyAcidsTotal: '1.282 g',
    selenium: '36.5 mcg',
    servingWeight: null,
    servings: '1',
    sodium: '104 mg',
    source: '<p>Wild-caught off Washington, Oregon, and California.</p>\n',
    sugarsTotal: null,
    taste:
      '<p>Canned or salted anchovies have a pronounced, salty tang, and fresh anchovies have a rich but subtle taste and a soft texture.</p>\n',
    texture:
      '<p>Unprocessed anchovies have soft flesh but canned meat is firm.</p>\n',
    path: '/profiles/northern-anchovy',
    lastUpdate: '07/08/2019 - 16:11',
    href: 'https://line-ready-api.azurewebsites.net/fish/96',
    method: null,
    rel: null,
  },
  {
    id: 95,
    fisheryManagement:
      '<ul>\n<li><a href="https://www.fisheries.noaa.gov/region/pacific-islands">NOAA Fisheries</a> and the <a href="http://www.wpcouncil.org/">Western Pacific Fishery Management Council</a> manage the Pacific blue marlin fishery.</li>\n<li>Managed under the <a href="http://www.wpcouncil.org/fep/WPRFMC%20Pelagic%20FEP%20(2009-09-21).pdf">Fishery Ecosystem Plan for Pacific Pelagic Fisheries of the Western Pacific Region</a>:\n<ul>\n<li>Entry to this fishery is limited to a maximum of 164 vessels.</li>\n<li>Permits and logbooks are required.</li>\n<li>Observers are required on all Hawaii-based longline vessels.</li>\n<li><a href="https://www.fisheries.noaa.gov/topic/enforcement#vessel-monitoring">NOAA Fisheries vessel monitoring system program</a>&nbsp;requires longline boats to be equipped with a satellite transponder that provides real-time vessel position updates and tracks vessel movements.</li>\n<li>Longlines are prohibited in certain areas to protect endangered Hawaiian monk seals and reduce the potential for gear conflicts and localized stock depletion.</li>\n<li>Vessels operating under longline general permits must carry special gear to release incidentally hooked or entangled sea turtles.</li>\n<li>Fishing gear requirements apply to all Hawaii longline limited access permitted vessels. The requirements may change depending on type of fishing trip, location of fishing, and how the gear is set. An overview of gear requirements can be found <a href="http://www.fpir.noaa.gov/SFD/pdfs/hawaii-longline-reg-summary.pdf">here</a>.</li>\n</ul>\n</li>\n<li>Management of highly migratory species, like Pacific blue marlin, is complicated because the species migrate thousands of miles across international boundaries and are fished by many nations.</li>\n<li>Effective conservation and management of this resource requires international cooperation as well as strong domestic management.</li>\n<li>Two organizations, the <a href="http://www.iattc.org/HomeENG.htm" rel="external">Inter-American Tropical Tuna Commission (IATTC)</a>&nbsp;and the <a href="https://www.wcpfc.int/" rel="external">Western and Central Pacific Fisheries Commission (WCPFC)</a>&nbsp;manage this fishery internationally.\n<ul>\n<li>These Commissions rely on the scientific advice of their staff and the analyses of the <a href="http://isc.fra.go.jp/" rel="external">International Scientific Committee for Tuna and Tuna-like Species in the North Pacific (ISC)</a><a href="http://isc.fra.go.jp/">&nbsp;</a>to develop and adopt international resolutions for conservation and management measures.</li>\n<li>Working with the U.S. Department of State, NOAA Fisheries domestically implements these conservation and management measures.</li>\n</ul>\n</li>\n</ul>\n',
    habitat:
      '<ul>\n<li>Blue marlin prefer warm surface waters that are well mixed by surface winds and are uniform in temperature and salinity. They are considered the most tropical of all billfishes.</li>\n<li>They spend all of their time in the water column, frequently moving between the surface and a depth of 100 meters. Depth distribution is limited by low water temperature and low oxygen levels.</li>\n</ul>\n',
    habitatImpacts:
      'Gear used to harvest blue marlin rarely contacts the ocean floor, so habitat impacts are minimal.',
    imageGallery: null,
    location:
      '<ul>\n<li>Blue marlin live throughout tropical and subtropical waters of the Indian, Pacific, and Atlantic Oceans.</li>\n</ul>\n',
    management: null,
    noaaFisheriesRegion: null,
    population: 'Above target population levels.',
    populationStatus:
      '<ul>\n<li>According to the 2016&nbsp;<a href="http://isc.fra.go.jp/pdf/ISC16/ISC16_Annex_10_Stock_Assessment_Update_for_Blue_Marlin_in_the_Pacific_Ocean_through_2014(ISC2016).pdf" rel="external">stock assessment</a>, Pacific blue marlin are not overfished and not subject to overfishing.</li>\n<li>Population assessments for Pacific blue marlin are conducted by the <a href="http://isc.fra.go.jp/working_groups/billfish.html" rel="external">Billfish Working Group</a>, a division of the <a href="http://isc.fra.go.jp/" rel="external">International Scientific Committee for Tuna and Tuna-Like Species in the North Pacific Ocean</a><a href="http://isc.fra.go.jp/"> </a>(ISC). NOAA Fisheries scientists participate in the ISC assessment and contribute relevant U.S. fishery data.</li>\n</ul>\n',
    scientificName: 'Makaira nigricans',
    speciesAliases:
      '<a href="/species-aliases/%E2%80%98u" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">A‘u</a>, <a href="/species-aliases/kajiki" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Kajiki</a>, <a href="/species-aliases/aguja-azul" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Aguja azul</a>',
    speciesIllustrationPhoto: {
      src:
        'https://www.fishwatch.gov/sites/default/files/pacific_blue_marlin.png',
      alt: 'Illustration of a pacific blue marlin',
      title: 'Pacific Blue Marlin',
    },
    speciesName: 'Pacific Blue Marlin',
    animalHealth: null,
    availability: '<p>From June through October.</p>\n',
    biology:
      '<ul>\n<li>Blue marlin may grow to be more than 12 feet long and may weigh up to 2,000 pounds.</li>\n<li>Female blue marlin grow larger than males and may live 20 years.</li>\n<li>Male blue marlin reach 7 feet in length and may live up to 10 years.</li>\n<li>They grow fast and may reach 3 to 6 feet in the first 1 to 2 years of life.</li>\n<li>Males mature around 2 years old, and females mature between 3 to 4 years old.</li>\n<li>Blue marlin spawn between May and September.</li>\n<li>They eat mostly tuna and other open water fishes.</li>\n</ul>\n',
    bycatch:
      'Regulations are in place to minimize bycatch in the tuna and swordfish fisheries, which incidentally catch the most commercially available blue marlin.',
    calories: '120',
    carbohydrate: null,
    cholesterol: '35 mg',
    color:
      '<p>Light golden-orange when raw, turns off-white when cooked.</p>\n',
    diseaseTreatmentandPrevention: null,
    diseasesinSalmon: null,
    displayedSeafoodProfileIllustration: null,
    ecosystemServices: null,
    environmentalConsiderations: null,
    environmentalEffects: null,
    farmingMethods: null,
    fatTotal: '0.5 g',
    feeds_: null,
    feeds: null,
    fiberTotalDietary: null,
    fishingRate: 'At recommended level.',
    harvest:
      '<ul>\n<li>Commercial fishery:\n<ul>\n<li>Marlin are primarily caught incidentally in pelagic longline commercial fisheries for tuna and swordfish. They are also a popular target fish for recreational fishermen.</li>\n<li>In 2018, commercial landings of Pacific blue marlin from the waters around Hawaii totaled more than 1.8&nbsp;million pounds and were valued at more than $1.6&nbsp;million.</li>\n<li>The <a href="https://www.govtrack.us/congress/bills/112/hr2706/text" rel="external">Billfish Conservation Act</a>, along with existing billfish regulations, prohibits the sale and commercial possession of billfish and billfish products. However, those that are caught in Hawaii and the Pacific Insular Areas (which includes American Samoa, Guam, and the Northern Mariana Islands) are exempt and can be sold.</li>\n</ul>\n</li>\n<li>Gear types, habitat impacts, and bycatch:\n<ul>\n<li>U.S. pelagic longline fishermen who target tuna and swordfish may incidentally catch blue marlin.</li>\n<li>Fishing gear used to catch tuna and swordfish rarely contacts the seafloor so habitat impacts are minimal.</li>\n<li>Restrictions on the type of fishing gear that can be used, and prohibitions on fishing in certain areas, minimize impacts on protected species.</li>\n<li>Interactions with protected species such as sea turtles, marine mammals, and seabirds in these fisheries are rare and survival rates are estimated to be high for all gear types.</li>\n<li>Longline fishermen are trained in safe handling and release techniques for sea turtles, seabirds, and marine mammals, and they carry and use specific equipment for handling and releasing these animals.</li>\n<li>Scientists and managers continue to monitor bycatch in these fisheries through logbooks and fishery observer programs.</li>\n</ul>\n</li>\n<li>Recreational fishery:\n<ul>\n<li>Blue marlin are a favorite target for recreational fishermen, as the fish tend to put up an incredible fight when hooked.\n<ul></ul>\n</li>\n<li>Hawaii hosts one of the largest billfish tournaments in the United States. Most fish caught in recreational tournaments are tagged and released.</li>\n<li>There is little bycatch associated with the recreational fishery.</li>\n</ul>\n</li>\n</ul>\n',
    harvestType: null,
    healthBenefits:
      '<p>Blue marlin is low in saturated fat and sodium, and is a good source of vitamin B12, vitamin B6, selenium, niacin, and protein.</p>\n',
    human_Health_: null,
    humanHealth: null,
    physicalDescription:
      '<ul>\n<li>Blue marlin are deep cobalt blue on top and silvery white on the bottom.</li>\n<li>They have a pronounced dorsal fin and a long, spear-shaped upper jaw (bill).</li>\n</ul>\n',
    production: null,
    protein: '29 g',
    quote:
      'U.S. wild-caught Pacific blue marlin is a smart seafood choice because it is sustainably managed and responsibly harvested under U.S. regulations. ',
    quoteBackgroundColor: '#204ab7',
    research: null,
    saturatedFattyAcidsTotal: '0 g',
    selenium: '110 mcg',
    servingWeight: null,
    servings: '1',
    sodium: '45 mg',
    source:
      '<p>U.S. wild-caught from waters around Hawaii, other U.S. Pacific Islands, and the high seas.</p>\n',
    sugarsTotal: null,
    taste: '<p>Rich, full flavor.</p>\n',
    texture: '<p>Firm and meaty, similar to swordfish.</p>\n',
    path: '/profiles/pacific-blue-marlin',
    lastUpdate: '05/06/2020 - 09:06',
    href: 'https://line-ready-api.azurewebsites.net/fish/95',
    method: null,
    rel: null,
  },
  {
    id: 94,
    fisheryManagement:
      '<ul>\n<li><a href="https://www.fisheries.noaa.gov/region/alaska">NOAA Fisheries</a> and the <a href="https://www.npfmc.org/">North Pacific Fishery Management Council</a>, manage the Pacific cod fishery in Alaska.</li>\n<li>Managed under the <a href="https://www.fisheries.noaa.gov/management-plan/groundfish-gulf-alaska-management-plan">Gulf of Alaska Groundfish Fishery Management Plan</a>:\n<ul>\n<li>Total allowable catch is allocated by gear type and processing sector in the western and central Gulf of Alaska and by processing sector (90 percent to the inshore sector and 10 percent to the offshore sector) in the eastern Gulf of Alaska.</li>\n</ul>\n</li>\n<li>Managed under the <a href="https://www.fisheries.noaa.gov/management-plan/groundfish-bering-sea-and-aleutian-islands-management-plan">Bering Sea/Aleutian Islands Groundfish Fishery Management Plan</a>:\n<ul>\n<li>10.7 percent of the allowable catch is allocated to the community development quota program, which benefits fishery-dependent communities in western Alaska. The rest is allocated among the various fishing sectors based on gear type, vessel size, and ability to process their catch.</li>\n</ul>\n</li>\n<li>In the Gulf of Alaska, Being Sea, and Aleutian Islands:\n<ul>\n<li>Fishermen must have a permit to participate in these fisheries, and the number of available permits is limited to control the amount of fishing.</li>\n<li>Managers determine how much Pacific cod can be caught and then allocate this catch quota among groups of fishermen. Catch is monitored through record keeping, reporting requirements, and observer monitoring.</li>\n<li>Fishermen must retain all of their Pacific cod catch.</li>\n</ul>\n</li>\n<li><a href="https://www.westcoast.fisheries.noaa.gov/">NOAA Fisheries</a> and the <a href="https://www.pcouncil.org/">Pacific Fishery Management Council</a> manage the Pacific cod fishery on the West Coast.</li>\n<li>Managed under the <a href="https://www.pcouncil.org/groundfish/fishery-management-plan/">Pacific Coast Groundfish Fishery Management Plan</a>:\n<ul>\n<li>Pacific cod are rarely available in large numbers to be caught in the groundfish fishery off the West Coast. Managers use recent historical harvest numbers to set precautionary limits on annual catch for this population.</li>\n<li>The West Coast groundfish trawl fishery is managed under a <a href="https://www.nwfsc.noaa.gov/research/divisions/fram/catch_shares.cfm">trawl rationalization catch share program</a>.</li>\n</ul>\n</li>\n</ul>\n',
    habitat:
      '<ul>\n<li>During the winter, Pacific cod live on the continental shelf edge and upper continental slope in waters 300 to more than 800 feet deep.</li>\n<li>In the summer, they move to shallower water (300 feet deep or less).</li>\n<li>Larvae and small juveniles are found throughout the water column, while large juveniles and adults live near the ocean floor and prefer habitats of mud, sand, and clay.</li>\n</ul>\n',
    habitatImpacts:
      'Area closures and gear restrictions protect habitat that are affected by some types of fishing gear used to harvest Pacific cod.',
    imageGallery: null,
    location:
      '<ul>\n<li>Pacific cod are found in the coastal North Pacific Ocean, from the Bering Sea to Southern California in the east and to the Sea of Japan in the west.</li>\n<li>They are less common in Central California and are rare in Southern California.</li>\n</ul>\n',
    management: null,
    noaaFisheriesRegion: null,
    population:
      'The Bering Sea stock is above target population levels. The Gulf of Alaska stock is below target levels and fishing rate promotes population growth. The Aleutian Islands and Pacific coast stocks have an unknown status.',
    populationStatus:
      '<ul>\n<li>There are four stocks of Pacific cod: Bering Sea, Gulf of Alaska, Aleutian Islands, and West Coast:\n<ul>\n<li>2018&nbsp;stock assessments in the <a href="https://www.fisheries.noaa.gov/resource/data/2018-assessment-pacific-cod-stock-eastern-bering-sea">Bering Sea</a> and <a href="https://www.fisheries.noaa.gov/resource/data/2018-assessment-pacific-cod-stock-gulf-alaska">Gulf of Alaska</a> indicate that Pacific cod are not overfished and not subject to overfishing.&nbsp;</li>\n<li>The 2018 stock assessment for the <a href="https://www.fisheries.noaa.gov/resource/data/2018-assessment-pacific-cod-stock-aleutian-islands">Aleutian Islands</a>&nbsp;stock&nbsp;indicates that it is not subject to overfishing, but data are insufficient to determine the population status at this time.</li>\n<li>The West Coast population of Pacific cod has never been formally assessed, but is not subject to overfishing based on <a href="https://www.nwfsc.noaa.gov/research/divisions/fram/observation/pdf/Groundfish_Mortality_2016.pdf">2018&nbsp;catch data</a>.</li>\n</ul>\n</li>\n<li>In Alaska, scientists and managers determine the population status of Pacific cod based on estimates of spawning biomass—a measure of the number of females in the population that are able to reproduce.\n<ul>\n<li>Estimated biomass has fluctuated over the past few decades; the stock increased rapidly, peaked in the 1980s, then declined slightly and stabilized.</li>\n</ul>\n</li>\n</ul>\n',
    scientificName: 'Gadus macrocephalus',
    speciesAliases:
      '<a href="/species-aliases/cod" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Cod</a>, <a href="/species-aliases/alaska-cod" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Alaska cod</a>, <a href="/species-aliases/gray-cod" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Gray cod</a>, <a href="/species-aliases/true-cod" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">True cod</a>',
    speciesIllustrationPhoto: {
      src: 'https://www.fishwatch.gov/sites/default/files/pacific_cod.png',
      alt: 'Illustration of a pacific cod',
      title: 'Pacific Cod',
    },
    speciesName: 'Pacific Cod',
    animalHealth: null,
    availability: '<p>Year-round.</p>\n',
    biology:
      '<ul>\n<li>Pacific cod live for 20 years or less.</li>\n<li>They can grow up to 6 feet in length.</li>\n<li>Females are able to reproduce when they’re 4 or 5 years old, when they are between 1.6 and 1.9 feet long.</li>\n<li>Pacific cod spawn from January to May on the continental shelf edge and upper slope in waters 330 to 820 feet deep.</li>\n<li>Females can produce more than 1 million eggs when they spawn.</li>\n<li>Pacific cod school together and move seasonally from deep outer and upper continental shelf areas (where they spawn) to shallow middle-upper continental shelf feeding grounds.</li>\n<li>They feed on clams, worms, crabs, shrimp, and juvenile fish.</li>\n</ul>\n',
    bycatch:
      'Measures restricting the type of gear fishermen may use and when and where they may fish reduce bycatch of other species in the U.S. Pacific cod fisheries.',
    calories: '82',
    carbohydrate: null,
    cholesterol: '37 mg',
    color:
      '<p>Raw Pacific cod is opaque and creamy white. Cooked cod is white.</p>\n',
    diseaseTreatmentandPrevention: null,
    diseasesinSalmon: null,
    displayedSeafoodProfileIllustration: null,
    ecosystemServices: null,
    environmentalConsiderations: null,
    environmentalEffects: null,
    farmingMethods: null,
    fatTotal: '0.63 g',
    feeds_: null,
    feeds: null,
    fiberTotalDietary: null,
    fishingRate: 'At recommended levels. ',
    harvest:
      '<ul>\n<li>Commercial fishery:\n<ul>\n<li>Pacific cod is the second largest commercial groundfish catch off Alaska and virtually all of the United States.</li>\n<li>In 2018, commercial harvest of Pacific cod totaled more than 512.9&nbsp;million pounds, and was worth more than $233&nbsp;million.&nbsp;</li>\n<li>Most Pacific cod comes from the Bering and Barents Seas and the Gulf of Alaska and is harvested by the United States, Canada, Russia, and Korea.</li>\n</ul>\n</li>\n<li>Gear types, habitat impacts, and bycatch:\n<ul>\n<li>Pacific cod are typically harvested along with several different groundfish species with longlines (hook-and-line) and bottom trawl gear.</li>\n<li>Pots (or traps) and jig gear are also used to catch Pacific cod.</li>\n<li>In the Gulf of Alaska the dominant gear has been pots, in the Aleutian Islands trawl gear is predominantly used, and in the Bering Sea longline gear is used most frequently.</li>\n<li>Bottom trawl vessels cause minimal damage when targeting Pacific cod over soft ocean bottoms. Trawls can have negative impacts in areas where Pacific cod are associated with living structural habitats, such as corals and sea whips.</li>\n<li>Some areas are closed to certain gear types to protect sensitive habitat and organisms.</li>\n<li>In Alaska, measures restricting the type of gear fishermen may use and when and where they may fish reduce bycatch of other species in the Alaska Pacific cod fisheries.</li>\n<li>There are limits on the amount of Pacific halibut that can be incidentally caught in trawl and hook-and-line fisheries. Longlines are known to catch seabirds incidentally, but current <a href="https://www.fisheries.noaa.gov/alaska/bycatch/seabird-bycatch-alaska">measures</a> are reducing seabird bycatch.</li>\n<li>On the West Coast, area closures, reduced trip limits, non-retention rules, gear restrictions, and variable catch limits are used to help minimize impacts to overfished rockfish and prevent bycatch.</li>\n</ul>\n</li>\n<li>Recreational fishery:\n<ul>\n<li>Recreational fishing for Pacific cod in Alaska is minor compared to commercial fishing and mainly takes place in state waters (within 3 miles of shore). Recreational fishermen follow state regulations.</li>\n</ul>\n</li>\n</ul>\n',
    harvestType: null,
    healthBenefits:
      '<p>Pacific cod is a good source of low-fat protein, phosphorus, niacin, and vitamin B12.</p>\n',
    human_Health_: null,
    humanHealth: null,
    physicalDescription:
      '<ul>\n<li>Pacific cod are also known as gray cod because of their color—they’re brown or grayish with dark spots or patterns on the sides and a paler belly.</li>\n<li>They have a long chin barbell (a whisker-like organ near the mouth, like on a catfish) and dusky fins with white edges.</li>\n</ul>\n',
    production: null,
    protein: '17.9 g',
    quote:
      'U.S. wild-caught Pacific cod is a smart seafood choice because it is sustainably managed and responsibly harvested under U.S. regulations.',
    quoteBackgroundColor: '#7d6b4c',
    research: null,
    saturatedFattyAcidsTotal: '0.081 g',
    selenium: '36.5 mcg',
    servingWeight: null,
    servings: '1',
    sodium: '71 mg',
    source: '<p>U.S. wild-caught from Alaska, Washington, and Oregon.</p>\n',
    sugarsTotal: null,
    taste: '<p>Pacific cod is a mild-tasting fish.</p>\n',
    texture:
      '<p>Cooked Pacific cod is lean and flaky. Its moisture content is a bit higher than that of Atlantic cod, making the meat less firm.</p>\n',
    path: '/profiles/pacific-cod',
    lastUpdate: '03/20/2020 - 09:38',
    href: 'https://line-ready-api.azurewebsites.net/fish/94',
    method: null,
    rel: null,
  },
  {
    id: 93,
    fisheryManagement:
      '<ul>\n<li><a href="https://www.westcoast.fisheries.noaa.gov/">NOAA Fisheries</a> and the <a href="https://www.pcouncil.org/">Pacific Fishery Management Council</a> manage the Pacific common thresher shark fishery on the West Coast.</li>\n<li>Managed under the <a href="http://www.wpcouncil.org/fishery-ecosystem-plans-amendments/pelagics-fishery-ecosystem-%20plan/">Fishery Management Plan for U.S. West Coast Fisheries for Highly Migratory Species</a>:\n<ul>\n<li>Permits are needed to fish for highly migratory species, including thresher sharks, and fishermen must maintain logbooks documenting their catch.</li>\n<li>Annual commercial harvest guidelines (a general objective for how much can be caught).</li>\n<li>Closed areas protect endangered turtles, and gillnetting is prohibited within 3 miles of the coast where shark pups reside.</li>\n<li>Fishermen are required to take a training course on safe handling and release of protected species.</li>\n<li>Mandatory placement (about 20 percent coverage) of at-sea observers on commercial drift gillnet vessels to monitor catch, bycatch, and fishing effort.</li>\n<li>Fishing times and areas are tightly managed to reduce the risk of catching protected species, such as sea turtles, whales, and dolphins.</li>\n</ul>\n</li>\n<li><a href="https://www.fisheries.noaa.gov/region/pacific-islands">NOAA Fisheries</a> and the <a href="http://wpcouncil.org/">Western Pacific Regional Fishery Management Council</a> manage the Pacific common thresher shark fishery in the Pacific Islands.</li>\n<li>Managed under the <a href="http://www.wpcouncil.org/fishery-plans-policies-reports/pelagics_fe/">Fishery Ecosystem Plan for the Pelagic Fisheries of the Western Pacific:</a>&nbsp;\n<ul>\n<li>Entry to this fishery is limited to a maximum of 164 vessels.</li>\n<li>Permits and logbooks are required.</li>\n<li>Observers are required on all Hawaii-based longline vessels.</li>\n<li><a href="https://www.fisheries.noaa.gov/topic/enforcement/vessel-monitoring">NOAA Fisheries vessel monitoring system (VMS) program</a> requires longline boats to be equipped with a satellite transponder that provides real-time vessel position updates and tracks vessel movements.</li>\n<li>Longlines are prohibited in certain areas to protect endangered Hawaiian monk seals and reduce the potential for gear conflicts and localized stock depletion.</li>\n<li>Vessels operating under longline general permits must carry special gear to release incidentally hooked or entangled sea turtles.&nbsp;</li>\n<li>There are no management measures specific to Pacific common thresher sharks, because in the Western Pacific they’re only harvested incidentally in the longline fishery for swordfish.</li>\n</ul>\n</li>\n</ul>\n<ul>\n<li>The <a href="https://www.fisheries.noaa.gov/national/laws-and-policies/shark-conservation-act">Shark Conservation Act</a> requires that all sharks, with one exception, be brought to shore with their fins naturally attached.</li>\n<li>Management of highly migratory species, like thresher sharks, is complicated because the species migrate thousands of miles across international boundaries and are fished by many nations.\n<ul>\n<li>Two international organizations, the <a href="http://www.iattc.org/HomeENG.htm" rel="external">Inter-American Tropical Tuna Commission (IATTC)</a> and the <a href="https://www.wcpfc.int/" rel="external">Western and Central Pacific Fisheries Commission (WCPFC)</a>&nbsp;manage highly migratory species, like sharks, internationally.&nbsp;</li>\n<li>No international measures are in place specific to common thresher sharks, but both organizations have passed shark conservation and management measures that combat shark finning practices and encourage further research and periodic stock assessment efforts for sharks.</li>\n</ul>\n</li>\n</ul>\n',
    habitat:
      '<ul>\n<li>Thresher sharks are highly migratory, and travel seasonally as temperatures change.</li>\n<li>They are commonly found close to shore in areas rich with plankton, where their prey is also abundant.</li>\n</ul>\n',
    habitatImpacts:
      'Drift gillnets and harpoons used to catch common thresher sharks have no impact on habitat because they’re used in the water column and don’t contact the ocean floor.',
    imageGallery: null,
    location:
      '<ul>\n<li>Thresher sharks are found in the Eastern Pacific Ocean from Goose Bay, British Columbia, south to Baja California. They’re also found off Panama and Chile.</li>\n<li>They migrate seasonally between Oregon/Washington and southern California/Baja Peninsula, Mexico.</li>\n</ul>\n',
    management: null,
    noaaFisheriesRegion: null,
    population: 'Above target population levels.',
    populationStatus:
      '<ul>\n<li>According to the <a href="https://doi.org/10.7289/V5/TM-SWFSC-595">2018 stock assessment</a>, Pacific common thresher sharks are not overfished and not subject to overfishing.</li>\n</ul>\n',
    scientificName: 'Alopias vulpinus',
    speciesAliases:
      '<a href="/species-aliases/thresher-shark" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Thresher shark</a>, <a href="/species-aliases/fox-shark" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Fox shark</a>, <a href="/species-aliases/sea-fox" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Sea fox</a>, <a href="/species-aliases/swingletail" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Swingletail</a>, <a href="/species-aliases/whiptail-shark" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Whiptail shark</a>, <a href="/species-aliases/thintail-shark" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Thintail shark</a>',
    speciesIllustrationPhoto: {
      src:
        'https://www.fishwatch.gov/sites/default/files/atlantic_common_thresher_shark.png',
      alt: 'Illustration of a Pacific Common Thresher Shark',
      title: 'Pacific Common Thresher Shark',
    },
    speciesName: 'Pacific Common Thresher Shark',
    animalHealth: null,
    availability: '<p>Year-round.</p>\n',
    biology:
      '<ul>\n<li>Thresher sharks grow slowly, reaching lengths up to 18 feet.</li>\n<li>They live a long time, between 19 and 50 years.</li>\n<li>They mature when they reach about 5 years old and 5 feet in length.</li>\n<li>Thresher sharks mate in midsummer. Eggs are fertilized internally and develop inside the female.</li>\n<li>After a gestation period of about 9 months, females bear two to four live pups in the spring.</li>\n<li>Thresher sharks feed on small pelagic fish—including anchovies, sardines, hake, mackerel, and squid.</li>\n<li>They are named for their long, scythe-like tail, which they use to swat and stun fish before preying on them.</li>\n<li>Top-level predators, such as killer whales and larger sharks, prey on common threshers.</li>\n</ul>\n',
    bycatch: 'Regulations are in place to minimize bycatch. ',
    calories: '130',
    carbohydrate: null,
    cholesterol: '51 mg',
    color: '<p>Raw meat is white to tan with a pink blood line.</p>\n',
    diseaseTreatmentandPrevention: null,
    diseasesinSalmon: null,
    displayedSeafoodProfileIllustration: null,
    ecosystemServices: null,
    environmentalConsiderations: null,
    environmentalEffects: null,
    farmingMethods: null,
    fatTotal: '4.51 g',
    feeds_: null,
    feeds: null,
    fiberTotalDietary: null,
    fishingRate: 'At recommended levels.',
    harvest:
      '<ul>\n<li>In 2018, commercial landings of thresher shark on the West Coast totaled more than 98,700 pounds and were valued at more than $73,300.\n<ul>\n<li>Most&nbsp;thresher shark landings&nbsp;are in&nbsp;California.</li>\n</ul>\n</li>\n<li>Gear types and bycatch:\n<ul>\n<li>Drift gillnets are used to catch common thresher sharks.</li>\n<li>Drift gillnets can incidentally catch other species, such as ocean sunfish and blue sharks.</li>\n<li>Protected species, such as sperm whales and sea turtles, may be caught as bycatch in drift gillnet fisheries.</li>\n<li>Managers limit where and when drift gillnet fishermen can fish to help prevent bycatch. Logbooks and observer programs help monitor bycatch.</li>\n<li>The California thresher shark gillnet fishery is a <a href="https://www.fisheries.noaa.gov/national/marine-mammal-protection/marine-mammal-protection-act-list-fisheries">Category I fishery</a>, meaning it has frequent incidental mortality or serious injury of marine mammals.\n<ul>\n<li>NOAA Fisheries works with the federally appointed <a href="https://www.fisheries.noaa.gov/national/marine-mammal-protection/marine-mammal-take-reduction-plans-and-teams">Pacific Offshore Cetacean Take Reduction Team</a> to develop measures that reduce the impacts of this fishery on certain marine mammals.</li>\n</ul>\n</li>\n</ul>\n</li>\n<li>On the West Coast, recreational catch varies but has averaged roughly 20 metric tons in recent years. Recreational fishermen have daily bag limits for thresher sharks.</li>\n</ul>\n',
    harvestType: null,
    healthBenefits:
      '<p>High in protein, low in fat, and a good source of niacin, vitamin B6, phosphorous, and selenium. More information on <a href="https://www.fishwatch.gov/eating-seafood/health">health and seafood</a>.</p>\n',
    human_Health_: null,
    humanHealth: null,
    physicalDescription:
      '<ul>\n<li>Thresher sharks are brown, gray, blue-gray, or blackish on the back and underside of their snout.</li>\n<li>They are lighter on the sides, and fully white below.</li>\n<li>Fins are blackish, and some have white dots on the tips.</li>\n<li>Their tail fin is sickle-shaped, and the upper part is very long, about half the length of the body.</li>\n</ul>\n',
    production: null,
    protein: '20.98 g',
    quote:
      'U.S. wild-caught Pacific common thresher shark is a smart seafood choice because it is sustainably managed and responsibly harvested under U.S. regulations.',
    quoteBackgroundColor: '#4e6172',
    research: null,
    saturatedFattyAcidsTotal: '0.925 g',
    selenium: '36.5 mcg',
    servingWeight: null,
    servings: '1',
    sodium: '79 mg',
    source:
      '<p>U.S. wild-caught from California and the Pacific Islands.&nbsp;</p>\n',
    sugarsTotal: null,
    taste: '<p>Mild flavor.</p>\n',
    texture: '<p>Firm, dense, and meat-like.</p>\n',
    path: '/profiles/pacific-common-thresher-shark',
    lastUpdate: '05/13/2020 - 10:35',
    href: 'https://line-ready-api.azurewebsites.net/fish/93',
    method: null,
    rel: null,
  },
  {
    id: 92,
    fisheryManagement:
      '<ul>\n<li><a href="https://www.sefsc.noaa.gov/species/fish/amberjack.htm">NOAA Fisheries</a> and the <a href="http://www.safmc.net/">South Atlantic</a>, <a href="http://www.gulfcouncil.org/">Gulf of Mexico</a>, and <a href="https://caribbeanfmc.com/">Caribbean</a> Fishery Management Councils manage the greater amberjack fishery. The governments of Puerto Rico and the U.S. Virgin Islands manage the greater amberjack fishery in territorial waters.</li>\n<li>In the South Atlantic, managed under the <a href="http://www.safmc.net/resource-library/snapper-grouper">Snapper-Grouper Fishery Management Plan</a>:\n<ul>\n<li>Fishermen must have a limited access snapper grouper permit to commercially harvest greater amberjack. Anyone entering the commercial fishery must buy two transferable vessel permits in order to qualify for a newly issued permit, thus eliminating one permit each time a new person enters the commercial fishery.</li>\n<li>Commercial and recreational size limits, to ensure that fish grow large enough to reproduce.</li>\n<li>Commercial trip and recreational bag limits.</li>\n<li>During April of each year, the commercial fishing season is closed to alleviate fishing pressure when the fish aggregate to spawn and are highly vulnerable to fishing. The sale and purchase of greater amberjack during this seasonal closure is illegal.</li>\n<li>To help protect deep-water snapper grouper species and their habitats, there are restrictions on the use of bottom longline and trawl fishing gear.</li>\n<li>There are eight deep-water marine protected areas intended to protect habitats.</li>\n</ul>\n</li>\n<li>In the Gulf of Mexico, managed under the <a href="http://www.gulfcouncil.org/fishery_management_plans/reef_fish_management.php">Reef Fish Resources of the Gulf of Mexico Fishery Management Plan</a>:\n<ul>\n<li>Commercial and recreational size limits ensure that fish grow large enough to reproduce.</li>\n<li>Commercial and recreational trip and bag limits.</li>\n<li>To promote spawning and slow the rate of harvest, closed seasons have been implemented for the commercial (from March 1 through May 31) and recreational (from June 1 through July 31) fisheries.</li>\n<li>To help protect reef fish, sea turtles, and bottom habitat, there are restrictions on the use of longline gear.</li>\n</ul>\n</li>\n<li>In federal waters of the U.S. Caribbean, greater amberjack are managed under the <a href="https://caribbeanfmc.com/fishery-management/fishery-management-plans">Fishery Management Plan for the Reef Fish Fishery of Puerto Rico and the U.S. Virgin Islands</a>, and territorial regulations in each of Puerto Rico and the U.S. Virgin Islands:\n<ul>\n<li>In federal waters of the U.S. Caribbean, greater amberjack are managed as part of three island-level Jacks Complexes (Puerto Rico, St.Thomas/St. John, and St. Croix), which include seven jack species. A stock complex, such as the Jacks Complex, includes multiple fish stocks that are managed as one unit in a fishery.</li>\n<li>Recreational bag limits apply to the jacks complex in federal waters of the U.S. Caribbean.</li>\n<li>In Puerto Rico territorial waters, greater amberjack cannot be sold.</li>\n</ul>\n</li>\n</ul>\n',
    habitat:
      '<ul>\n<li>Juvenile greater amberjack school around mats of pelagic (open ocean) <em>Sargassum</em> in the Gulf of Mexico. Sargassum is an algae that provides food and protection for juvenile fish and invertebrates in the open ocean. Schooling behavior decreases as greater amberjack mature.</li>\n<li>They shift from inhabiting pelagic to demersal (near the ocean bottom) habitats at about 5 to 6 months of age. Sub-adults and adults congregate around reefs, rocky outcrops, and wrecks at depths of 60 to 240 feet.</li>\n<li>Some populations live in a particular location while others migrate, likely using a variety of habitats and areas throughout the year.</li>\n</ul>\n',
    habitatImpacts:
      'Fishing gear used to catch greater amberjack rarely contacts the ocean floor and has minimal impacts on habitat.',
    imageGallery: null,
    location:
      '<ul>\n<li>Greater amberjack are found in the Atlantic and Pacific Oceans.</li>\n<li>In the western Atlantic, they are found from Nova Scotia to Brazil, including the Gulf of Mexico and the Caribbean.</li>\n</ul>\n',
    management: null,
    noaaFisheriesRegion: null,
    population:
      'Above target population levels in the South Atlantic, but significantly below target population levels in the Gulf of Mexico, where a rebuilding plan is in place. The population level in the Caribbean is unknown.',
    populationStatus:
      '<ul>\n<li>According to the <a href="http://sedarweb.org/sedar-33u-0">2017&nbsp;stock assessment</a>, Gulf of Mexico greater amberjack is&nbsp;overfished, and is&nbsp;subject to overfishing based on 2018&nbsp;catch data.</li>\n<li>According to the <a href="http://sedarweb.org/sedar-15">2008 stock assessment</a>, South Atlantic greater amberjack is&nbsp;not overfished, but&nbsp;is&nbsp;subject to overfishing based on 2018 catch data.</li>\n<li>The population status of the U.S. Caribbean Jacks Complex, which includes greater amberjack, is unknown. The complex has not been assessed, but according to 2016&nbsp;catch data, the complex is not subject to overfishing.</li>\n<li>During the period of high landings in the 1980s and 1990s, greater amberjack became an important alternative for red drum, which experienced decreases in commercial landings. In the Gulf of Mexico, fishing rates were too high and the stock was declared overfished in 2001. The stock has been in a rebuilding plan since 2003.</li>\n</ul>\n',
    scientificName: 'Seriola dumerili',
    speciesAliases:
      '<a href="/species-aliases/amberjack" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Amberjack</a>, <a href="/species-aliases/medregal" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Medregal</a>, <a href="/species-aliases/coronado" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Coronado</a>',
    speciesIllustrationPhoto: {
      src:
        'https://www.fishwatch.gov/sites/default/files/greater_amberjack.png',
      alt: 'Illustration of a Greater Amberjack.',
      title: 'Greater Amberjack',
    },
    speciesName: 'Greater Amberjack',
    animalHealth: null,
    availability:
      '<p>Fresh (except in April when fishery is closed) and frozen year-round.</p>\n',
    biology:
      '<ul>\n<li>Greater amberjack can grow up to 6 feet long and live to be 17 years old.</li>\n<li>Adults can weigh up to 200 pounds, but are most commonly found to be up to 40 pounds.</li>\n<li>Females grow larger in size and live longer than males.</li>\n<li>Greater amberjack mature at about 3 to 4 years of age and spawn primarily from March to June on reefs and shipwrecks. A female can release between 18 and 59 million eggs during a single spawning season.</li>\n<li>Adults eat mostly crab, squid, and other fishes found on reefs.</li>\n<li>Juveniles feed on plankton, including crustacean larvae and other small invertebrates.</li>\n<li>Predators include seabirds and larger fishes, such as yellowfin tuna.</li>\n</ul>\n',
    bycatch:
      'Bycatch is low because the gears used to catch greater amberjack are selective.',
    calories: '146',
    carbohydrate: null,
    cholesterol: '55 mg',
    color: '',
    diseaseTreatmentandPrevention: null,
    diseasesinSalmon: null,
    displayedSeafoodProfileIllustration: null,
    ecosystemServices: null,
    environmentalConsiderations: null,
    environmentalEffects: null,
    farmingMethods: null,
    fatTotal: '5.24 g',
    feeds_: null,
    feeds: null,
    fiberTotalDietary: null,
    fishingRate:
      'In the South Atlantic and Gulf of Mexico reduced to end overfishing.',
    harvest:
      '<ul>\n<li>In 2017, commercial landings of greater amberjack totaled more than 1.1 million pounds and were valued at more than $1.8&nbsp;million.</li>\n<li>Electric and hydraulic reels and hand lines are used to catch most of the commercial harvest of greater amberjack. Recreational harvest is by hook-and-line.</li>\n<li>Greater amberjack are large trophy fish prized by anglers, and recreational landings totaled approximately 610,000 pounds in 2017.</li>\n</ul>\n',
    harvestType: null,
    healthBenefits: '',
    human_Health_: null,
    humanHealth: null,
    physicalDescription:
      '<ul>\n<li>Greater amberjack have a dark amber strip on their head, extending from their nose to their first dorsal (back) fin, which becomes more defined when the fish is excited or feeding.</li>\n<li>They have a brownish or bluish-grey back, a silvery-white belly, and an amber horizontal strip along the middle of their body.</li>\n<li>Juveniles have a yellow color and five or six dark vertical bars along the sides.</li>\n</ul>\n',
    production: null,
    protein: '23.1 g',
    quote:
      'Although some populations are below target levels, U.S. wild-caught greater amberjack is still a smart seafood choice because it is sustainably managed and responsibly harvested under U.S. regulations.',
    quoteBackgroundColor: '#ada24c',
    research: null,
    saturatedFattyAcidsTotal: '1.28 g',
    selenium: '36.5 mcg',
    servingWeight: null,
    servings: '1',
    sodium: '39 mg',
    source:
      '<p>U.S. wild-caught from Virginia to Texas, including the U.S. Caribbean.</p>\n',
    sugarsTotal: null,
    taste: '<p><span>Greater amberjack has a sweet, mild flavor.</span></p>\n',
    texture:
      '<p>Tender, firm, and delicate. The high oil content gives it a buttery texture.</p>\n',
    path: '/profiles/greater-amberjack',
    lastUpdate: '02/07/2020 - 14:45',
    href: 'https://line-ready-api.azurewebsites.net/fish/92',
    method: null,
    rel: null,
  },
  {
    id: 91,
    fisheryManagement:
      '<ul>\n<li><a href="https://www.westcoast.fisheries.noaa.gov/">NOAA Fisheries</a> and the <a href="https://www.pcouncil.org/">Pacific Fishery Management Council</a> manage the petrale sole fishery on the West Coast.</li>\n<li>Managed under the <a href="https://www.pcouncil.org/groundfish/fishery-management-plan/">Pacific Coast Groundfish Fishery Management Plan</a>:\n<ul>\n<li>Limits on the number of <a href="https://www.westcoast.fisheries.noaa.gov/fisheries/management/groundfish_permits/limited_entry_permits.html">permits</a> and fishermen allowed.</li>\n<li>Limits on the minimum size of fish that may be harvested.</li>\n<li>Limit on how much may be harvested in one fishing trip.</li>\n<li>Certain seasons and <a href="https://www.westcoast.fisheries.noaa.gov/fisheries/management/groundfish_closures/groundfish_closed_areas.html">areas</a> are closed to fishing.</li>\n<li>Gear restrictions help reduce bycatch and impacts on habitat.</li>\n<li>A <a href="https://www.westcoast.fisheries.noaa.gov/fisheries/groundfish_catch_shares/index.html">trawl rationalization catch share program</a> includes:\n<ul>\n<li>Catch limits based on population information for each fish stock and divided into shares that are allocated to individual fishermen or groups.</li>\n<li>These fishermen can decide how and when to catch their share – preferably when weather, markets, and business conditions are most favorable, allowing the fishery the flexibility to be more environmentally responsible, safer, more efficient, and more valuable.</li>\n</ul>\n</li>\n</ul>\n</li>\n<li><a href="https://www.fisheries.noaa.gov/region/alaska">NOAA Fisheries</a> and the <a href="https://www.npfmc.org/">North Pacific Fishery Management Council</a> manage the petrale sole fishery in Alaska.</li>\n<li>Managed under the Fishery Management Plan for Groundfish in the <a href="https://www.fisheries.noaa.gov/management-plan/groundfish-gulf-alaska-management-plan">Gulf of Alaska</a>, and the <a href="https://www.fisheries.noaa.gov/management-plan/groundfish-bering-sea-and-aleutian-islands-management-plan">Bering Sea and Aleutian Islands</a>:\n<ul>\n<li>There is no directed fishery for this species off Alaska, and only minor amounts are landed incidentally in other fisheries.</li>\n</ul>\n</li>\n</ul>\n',
    habitat:
      '<ul>\n<li>Petrale sole are common on the outer continental shelf in water 330 to 500 feet deep, but can be found in depths ranging from 50 to 1,370 feet.</li>\n<li>Adults migrate seasonally from deep water where they spawn to shallow water where they feed in the summer.</li>\n<li>Eggs and larvae are found in surface waters, and juveniles and adults live on sandy and muddy bottoms.</li>\n</ul>\n',
    habitatImpacts:
      'Area closures and gear restrictions protect habitats that are affected by bottom trawls used to harvest petrale sole. ',
    imageGallery: null,
    location:
      '<ul>\n<li>Petrale sole are found from Alaska to Coronado Island, Baja California.</li>\n<li>They are rare north and west of southeast Alaska and in the interior waters of British Columbia.</li>\n</ul>\n',
    management: null,
    noaaFisheriesRegion: null,
    population:
      'Above target population levels on the West Coast and in the Gulf of Alaska. ',
    populationStatus:
      '<ul>\n<li>According to the <a href="https://www.pcouncil.org/stock-assessments-star-reports-stat-reports-rebuilding-analyses-terms-of-reference/">2015&nbsp;stock assessment</a> petrale sole on the West Coast are not overfished.\n<ul>\n<li>This population was declared overfished in 2009, and after a rebuilding plan and strict harvest limits were put in place, the stock was declared rebuilt in 2015.</li>\n</ul>\n</li>\n<li>On the West Coast, petrale sole is not subject to overfishing based on <a href="https://www.nwfsc.noaa.gov/research/divisions/fram/observation/data_products/species_management.cfm">2018&nbsp;catch data</a>.</li>\n<li>In the Gulf of Alaska, petrale sole is part of a complex with other flatfish, called the “shallow water flatfish complex”:\n<ul>\n<li>According to the <a href="https://www.fisheries.noaa.gov/resource/data/2018-assessment-shallow-water-flatfish-stock-complex-gulf-alaska">2018&nbsp;assessment</a>, this complex is not overfished and is not subject to overfishing.</li>\n</ul>\n</li>\n<li>In the Bering Sea/Aleutian Islands, petrale sole is part of a complex with other flatfish, called the “other flatfish complex”:\n<ul>\n<li>This complex was last <a href="https://www.fisheries.noaa.gov/resource/data/assessment-other-flatfish-stock-complex-bering-sea-and-aleutian-islands">assessed in 2018</a>, but data were insufficient to determine whether the complex is overfished.</li>\n<li>An overfishing level is set for the complex and, as long as this level is not exceeded, the complex is not subject to overfishing. The complex is not subject to overfishing.</li>\n</ul>\n</li>\n</ul>\n',
    scientificName: 'Eopsetta jordani',
    speciesAliases:
      '<a href="/species-aliases/sole" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Sole</a>, <a href="/species-aliases/flounder" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Flounder</a>, <a href="/species-aliases/california-sole" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">California sole</a>, <a href="/species-aliases/brill" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Brill</a>, <a href="/species-aliases/petral" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Petral</a>, <a href="/species-aliases/jordan%E2%80%99s-flounder" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Jordan’s flounder</a>, <a href="/species-aliases/round-nosed-sole" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Round-nosed sole</a>',
    speciesIllustrationPhoto: {
      src: 'https://www.fishwatch.gov/sites/default/files/petrale_sole.png',
      alt: 'Illustration of a petrale sole',
      title: '',
    },
    speciesName: 'Petrale Sole',
    animalHealth: null,
    availability: '<p>Year-round.</p>\n',
    biology:
      '<ul>\n<li>Petrale sole grow fast when they’re young, and females tend to grow faster than males.</li>\n<li>Females can reach up to 24 inches long, while males may reach up to 18 inches long.</li>\n<li>They can live up to 35 years, but recent data suggests few live longer than 17 years.</li>\n<li>Petrale sole can reproduce when they are 3 to 8 years old, or when they’re about 1 foot long. Females can produce 400,000 to 1.5 million eggs.</li>\n<li>They spawn from November to April in British Columbia, Washington, and Oregon. Spawning begins slightly earlier in California.</li>\n<li>Petrale sole is a broadcast spawner. Males and females release their sperm and eggs into the water column and eggs are fertilized externally.</li>\n<li>Eggs hatch in 6 to 13.5 days, depending on water temperatures.</li>\n<li>Petrale sole larvae spend their first 5 to 6 months up in the water column before they transform to their adult form and settle to the bottom.</li>\n<li>Petrale sole larvae eat plankton. Small juveniles eat mysids, sculpins, and other juvenile flatfish. Large juveniles and adults eat shrimp and other crustaceans, as well as krill, pelagic fishes, brittle stars, and juvenile petrale sole.</li>\n<li>Plankton-eating invertebrates and pelagic fishes eat petrale sole eggs. Adult petrale sole and other large flatfishes prey on juvenile petrale sole.</li>\n<li>Sharks, bottom-feeding marine mammals, larger flatfishes, and pelagic fishes feed on adults.</li>\n</ul>\n',
    bycatch: 'Regulations are in place to minimize bycatch.',
    calories: '91',
    carbohydrate: null,
    cholesterol: '48 mg',
    color: '',
    diseaseTreatmentandPrevention: null,
    diseasesinSalmon: null,
    displayedSeafoodProfileIllustration: null,
    ecosystemServices: null,
    environmentalConsiderations: null,
    environmentalEffects: null,
    farmingMethods: null,
    fatTotal: '1.19 g',
    feeds_: null,
    feeds: null,
    fiberTotalDietary: null,
    fishingRate: 'At recommended levels.',
    harvest:
      '<ul>\n<li>In 2018, commercial landings of petrale sole totaled more than 6.4 million pounds and were valued at $7.4 million.</li>\n<li>Gear types, habitat impacts, and bycatch:\n<ul>\n<li>Bottom trawls are used to catch petrale sole.</li>\n<li>Trawls that are used to harvest petrale sole can contact the ocean floor and impact habitats, depending on the characteristics of the ocean bottom and the size of the gear.</li>\n<li>Bottom trawls cause minimal damage to habitat when targeting petrale sole over soft, sandy, or muddy ocean bottoms on the West Coast and Alaska.</li>\n<li>On the West Coast, NOAA Fisheries and the North Pacific Fishery Management Council have implemented large <a href="https://www.westcoast.fisheries.noaa.gov/fisheries/management/groundfish_closures/groundfish_closed_areas.html">closed areas</a> to minimize bycatch and protect habitat.</li>\n<li><a href="https://www.westcoast.fisheries.noaa.gov/fisheries/management/vms.html">Vessel monitoring systems</a> allow enforcement staff and fishery managers to monitor GPS locations of fishing activities to ensure vessels are complying with closed areas.</li>\n</ul>\n</li>\n</ul>\n',
    harvestType: null,
    healthBenefits:
      '<p>Petrale sole is an excellent source of low-fat protein and calcium.</p>\n',
    human_Health_: null,
    humanHealth: null,
    physicalDescription:
      '<ul>\n<li>Petrale sole is a right-eyed flounder (both eyes are on its right side), with an oval to round body.</li>\n<li>Its upper side is uniform light to dark brown, and its underside is white, sometimes with pink traces.</li>\n<li>Petrale sole have large mouths, with two rows of small, arrow-shaped teeth on their upper jaw and one row of teeth on the lower jaw.</li>\n</ul>\n',
    production: null,
    protein: '18.84 g',
    quote:
      'U.S. wild-caught petrale sole is a smart seafood choice because it is sustainably managed and responsibly harvested under U.S. regulations.',
    quoteBackgroundColor: '#555555',
    research: null,
    saturatedFattyAcidsTotal: '0.283 g',
    selenium: '32.7 mcg',
    servingWeight: null,
    servings: '1',
    sodium: '81 mg',
    source: '<p>U.S. wild-caught from Washington to California.</p>\n',
    sugarsTotal: null,
    taste: '<p>Sweet, delicate, nutty flavor.</p>\n',
    texture: '<p>Fine.&nbsp;</p>\n',
    path: '/profiles/petrale-sole',
    lastUpdate: '05/14/2020 - 16:55',
    href: 'https://line-ready-api.azurewebsites.net/fish/91',
    method: null,
    rel: null,
  },
  {
    id: 90,
    fisheryManagement:
      '<ul>\n<li><a href="https://www.greateratlantic.fisheries.noaa.gov/index.html">NOAA Fisheries</a>, the <a href="http://www.mafmc.org/">Mid-Atlantic Fishery Management Council</a>, and the <a href="http://www.asmfc.org/species/black-sea-bass" rel="external">Atlantic States Marine Fisheries Commission</a> cooperatively manage the black sea bass fishery north of Cape Hatteras, North Carolina.</li>\n<li>Managed under the <a href="http://www.mafmc.org/sf-s-bsb/">Summer Flounder, Scup, and Black Sea Bass Fishery Management Plan</a>:\n<ul>\n<li>Annual catch limit divided between the commercial and recreational fisheries.</li>\n<li>The commercial catch limit is further divided among the states based on historical harvests.</li>\n<li>Specific management measures for the commercial fishery include:\n<ul>\n<li>Minimum size limits.</li>\n<li>Minimum mesh requirements for trawls.</li>\n<li>A moratorium on entry into the fishery.</li>\n<li>Closed seasons.</li>\n</ul>\n</li>\n</ul>\n</li>\n<li><a href="http://sero.nmfs.noaa.gov/index.html">NOAA Fisheries</a> and the <a href="http://safmc.net/">South Atlantic Fishery Management Council</a> manage the black sea bass fishery south of Cape Hatteras, North Carolina.</li>\n<li>Managed under the <a href="http://safmc.net/resource-library/snapper-grouper">South Atlantic Snapper Grouper Fishery Management Plan</a>:\n<ul>\n<li>Commercial fishermen must have a permit to harvest black sea bass.</li>\n<li>Annual catch limits, commercial trip limits, and recreational bag and possession limits.</li>\n<li>Sale and purchase restrictions applicable after a commercial quota closure.</li>\n<li>Minimum size limit.</li>\n<li>Accountability measures in place to ensure overfishing does not occur, or to correct for overages if catch limit is exceeded.</li>\n<li>Seasonal area closures for the commercial black sea bass component of the snapper-grouper fishery.</li>\n<li>Trawling has been banned in the South Atlantic since 1989 to prevent impacts to habitat.</li>\n<li>Gear restrictions for fish pots:\n<ul>\n<li>Commercial fishermen must have a pot endorsement to use a black sea bass pot to harvest black sea bass.</li>\n<li>Minimum mesh size to reduce catch of undersized black sea bass.</li>\n<li>Pots must have escape vents and escape panels with degradable fasteners to prevent bycatch.</li>\n<li>Limit on the number of pots per trip.</li>\n<li>Pots must be brought back to shore at the end of each trip to reduce bycatch and impacts to habitat and protected species.</li>\n<li>Pots are only allowed north of Cape Canaveral, Florida, to prevent adverse impacts on live-bottom habitat.</li>\n<li>Spatial and temporal closures to minimize entanglement risk for endangered North Atlantic Right Whales.</li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>\n',
    habitat:
      '<ul>\n<li>Black sea bass prefer structured habitats such as reefs, wrecks, or oyster beds in temperate and subtropical waters.</li>\n<li>In the Mid-Atlantic (north of Cape Hatteras, North Carolina), they migrate seasonally as water temperature changes.</li>\n<li>They generally migrate to inshore coastal areas and bays in the spring and offshore in the fall.</li>\n<li>In the South Atlantic, black sea bass do not tend to migrate as far.</li>\n</ul>\n',
    habitatImpacts:
      'Fishing gears used to harvest black sea bass have minimal impacts on habitat.',
    imageGallery: null,
    location:
      '<ul>\n<li>Along the U.S. East Coast from Cape Cod to the Gulf of Mexico.</li>\n</ul>\n',
    management: null,
    noaaFisheriesRegion: null,
    population:
      'Above target population levels in the Mid-Atlantic. Below target levels and fishing rate promotes population growth in the South Atlantic.',
    populationStatus:
      '<ul>\n<li>According to the <a href="https://www.fisheries.noaa.gov/resource/publication-database/northeast-stock-assessment-documents-search-tool">2019&nbsp;</a><a href="https://www.nefsc.noaa.gov/saw/reports.html">stock assessment</a>, the black sea bass stock in the Mid-Atlantic is not overfished and is not subject to overfishing.</li>\n<li>According to the <a href="http://sedarweb.org/docs/sar/S56_SA_BSB_SAR_FINAL_4.6.2018.pdf">2018&nbsp;stock assessment</a>, the black sea bass stock in the South Atlantic is not overfished&nbsp;and is not subject to overfishing.</li>\n<li>Although both stocks of black sea bass have been assessed, the biology of this species is not well known and data are lacking, resulting in stock assessments that have a high degree of uncertainty.</li>\n<li>In the Mid-Atlantic, scientists at <a href="https://www.nefsc.noaa.gov/">NOAA’s Northeast Fisheries Science Center</a> conduct bottom trawl surveys to estimate the abundance of black sea bass and other species.</li>\n<li>In the South Atlantic, scientists, managers, and stakeholders assess the status of these stocks through the <a href="http://sedarweb.org/">Southeast Data, Assessment, and Review (SEDAR)</a> process.</li>\n</ul>\n',
    scientificName: 'Centropristis striata',
    speciesAliases:
      '<a href="/species-aliases/sea-bass" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Sea bass</a>, <a href="/species-aliases/blackfish" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Blackfish</a>, <a href="/species-aliases/rock-bass" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Rock bass</a>, <a href="/species-aliases/black-bass" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Black bass</a>, <a href="/species-aliases/tallywag" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Tallywag</a>',
    speciesIllustrationPhoto: {
      src: 'https://www.fishwatch.gov/sites/default/files/black_sea_bass_0.png',
      alt: 'Black sea bass',
      title: 'Black sea bass',
    },
    speciesName: 'Black Sea Bass',
    animalHealth: null,
    availability: '<p>Generally year-round, but varies by state.</p>\n',
    biology:
      '<ul>\n<li>Black sea bass grow slowly, up to 2 feet and 9 pounds.</li>\n<li>They are able to reproduce when they reach 1 to 3 years old.</li>\n<li>They are protogynous hermaphrodites—most black sea bass start out as females, and as they mature and grow they become males. Researchers aren’t sure why this happens, but one hypothesis suggests the relative scarcity of males in a spawning group may be the stimulus for a female to switch sex.</li>\n<li>Black sea bass spawn in coastal areas from January through July.</li>\n<li>Males gather a group of females to mate with and aggressively defend their territory.</li>\n<li>Depending on their size, females can produce between 30,000 and 500,000 eggs in a spawning season.</li>\n<li>Females can live up to 8 years; males live up to 12.</li>\n<li>Black sea bass eat whatever prey is available, but they especially like crabs, shrimp, worms, small fish, and clams.</li>\n<li>Little skate, spiny dogfish, monkfish, spotted hake, and summer flounder all feed on black sea bass.</li>\n</ul>\n',
    bycatch: 'Regulations are in place to minimize bycatch.',
    calories: '97',
    carbohydrate: null,
    cholesterol: '41 mg',
    color:
      '<p>Uncooked meat should be sparkling white and translucent. The meat is snow white when cooked.</p>\n',
    diseaseTreatmentandPrevention: null,
    diseasesinSalmon: null,
    displayedSeafoodProfileIllustration: null,
    ecosystemServices: null,
    environmentalConsiderations: null,
    environmentalEffects: null,
    farmingMethods: null,
    fatTotal: '2 g',
    feeds_: null,
    feeds: null,
    fiberTotalDietary: null,
    fishingRate: 'At recommended levels.',
    harvest:
      '<ul>\n<li>Commercial fishery:\n<ul>\n<li>In 2018, commercial landings of black sea bass in the Mid-Atlantic totaled approximately 3.07 million pounds, and were valued at approximately $10.94 million.</li>\n<li>In 2018, commercial landings of black sea bass in the South Atlantic totaled 562,800 pounds, and were valued at approximately $1.74 million.</li>\n</ul>\n</li>\n<li>Gear types, habitat impacts, and bycatch:\n<ul>\n<li>In the Mid-Atlantic, commercial fishermen mainly use hook-and-line gear, pots, and otter trawls to catch black sea bass. Fisheries for black sea bass change seasonally with the species’ migrations.\n<ul>\n<li>Of the gear utilized within the snapper grouper fishery, only the black sea bass pot is considered to pose an entanglement risk to marine mammals.</li>\n<li>When the fish are inshore, commercial fishermen catch them primarily with fish pots (both baited and unbaited) and handlines.</li>\n<li>Once the fish move offshore in the winter, they’re caught in the trawl fishery that primarily targets summer flounder, scup, and longfin squid.</li>\n</ul>\n</li>\n<li>In the South Atlantic, fishermen use pots and sometimes handlines.\n<ul>\n<li>Fish bycatch in the pot fishery is minor because the gear is often not baited (black sea bass are drawn to the structure and enter the pots without bait), and the pot mesh size is regulated to select fish at or above the minimum size limit.</li>\n</ul>\n</li>\n</ul>\n</li>\n<li>Recreational fishery: Recreational fishermen use handlines to catch black sea bass.&nbsp;In 2018, recreational landings totaled more than 8.7 million pounds.\n<ul>\n<li>In the Mid-Atlantic:\n<ul>\n<li>There are size and bag limits, and seasonal measures, established for federal waters as well as by each state, to ensure that the recreational harvest limit is not exceeded.</li>\n<li>The recreational fishery is evaluated after the season, and management measures (bag, size, and/or season) are adjusted as needed in the following year.</li>\n</ul>\n</li>\n<li>In the South Atlantic:\n<ul>\n<li>There are size limits, fishing season, and daily and yearly catch limits, established for federal waters as well as by each state.</li>\n<li>There is a limit on annual recreational harvest, and recreational harvest is prohibited when the limit is met. If annual catch exceeds the limit, the overage is taken off the following year’s limit.</li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>\n',
    harvestType: null,
    healthBenefits:
      '<p>Black sea bass is a good low-fat source of protein and magnesium.</p>\n',
    human_Health_: null,
    humanHealth: null,
    physicalDescription:
      '<ul>\n<li>Black sea bass are usually black, but smaller ones are more of a dusky brown.</li>\n<li>The belly is slightly paler than the sides.</li>\n<li>Fins are dark with dusky spots.</li>\n<li>The dorsal fin is marked with a series of white spots and bands.</li>\n<li>During spawning, dominant males turn bright blue and have a blue hump on their heads.</li>\n</ul>\n',
    production: null,
    protein: '18.43 g',
    quote:
      'U.S. wild-caught black sea bass is a smart seafood choice because it is sustainably managed and responsibly harvested under U.S. regulations.',
    quoteBackgroundColor: '#4c4e4d',
    research: null,
    saturatedFattyAcidsTotal: '0.511 g',
    selenium: '36.5 mcg',
    servingWeight: null,
    servings: '1',
    sodium: '68 mg',
    source:
      '<p>U.S. wild-caught from Massachusetts to the west coast of Florida. The United States is the only source for this species.</p>\n',
    sugarsTotal: null,
    taste: '<p>Mild, fresh, somewhat delicate flavor.</p>\n',
    texture: '<p>Tender but firm.</p>\n',
    path: '/profiles/black-sea-bass',
    lastUpdate: '03/20/2020 - 16:29',
    href: 'https://line-ready-api.azurewebsites.net/fish/90',
    method: null,
    rel: null,
  },
  {
    id: 89,
    fisheryManagement:
      '<ul>\n<li><a href="http://www.greateratlantic.fisheries.noaa.gov/index.html">NOAA Fisheries</a>, the <a href="http://www.mafmc.org/">Mid-Atlantic Fishery Management Council</a>, and the <a href="http://asmfc.org/" rel="external">Atlantic States Marine Fisheries Commission</a> manage the bluefish fishery.</li>\n<li>Managed under the <a href="http://www.mafmc.org/fisheries/fmp/bluefish">Bluefish Fishery Management Plan</a>:\n<ul>\n<li>Commercial fishermen must have a permit to catch and sell bluefish.</li>\n<li>Managers set an annual catch limit.</li>\n<li>The majority of catch is allocated to the recreational fisheries.</li>\n<li>The commercial catch limit is divided into state-specific allocations. Unused recreational catch can be re-allocated to commercial fisheries.</li>\n</ul>\n</li>\n</ul>\n',
    habitat:
      '<ul>\n<li>Bluefish live in temperate and tropical coastal oceans around the world, except in the eastern Pacific.</li>\n<li>They gather by size in schools that can cover tens of square miles of ocean, equivalent to 10,000 football fields.</li>\n<li>Bluefish migrate seasonally, moving north in spring and summer as water temperatures rise and then south in autumn and winter to waters in the South Atlantic Bight.</li>\n<li>Females release their eggs in the open ocean.</li>\n<li>Larvae develop into juveniles near the surface in continental shelf waters and eventually move to estuarine and nearshore shelf habitats.</li>\n<li>Juveniles prefer sandy ocean bottoms but will also inhabit mud, silt, or clay ocean bottoms or vegetated areas.</li>\n<li>Adults live in both inshore and offshore areas and favor warmer water.</li>\n</ul>\n',
    habitatImpacts:
      'Recreational fishermen use hook-and-line gear that has minimal impacts on habitat. Commercial fishermen use a variety of gears including trawls, gillnets, haul seines, and pound nets, and the impacts vary by gear type.',
    imageGallery: null,
    location:
      '<ul>\n<li>Along the East Coast from Maine to eastern Florida.</li>\n</ul>\n',
    management: null,
    noaaFisheriesRegion: null,
    population:
      'Significantly below target population levels. The council has 2 years from the time it is notified of status to develop a rebuilding plan.',
    populationStatus:
      '<ul>\n<li>According to the <a href="https://www.nefsc.noaa.gov/saw/reviews_report_options.php">2019 stock assessment</a>, bluefish are overfished and not subject to overfishing.</li>\n<li>The current bluefish stock assessment uses landings data from the commercial and recreational fisheries, NOAA’s Northeast Fisheries Science Center’s autumn bottom trawl survey, and numerous state surveys conducted along the East Coast.</li>\n</ul>\n',
    scientificName: 'Pomatomus saltatrix',
    speciesAliases:
      '<a href="/species-aliases/tailor" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Tailor</a>, <a href="/species-aliases/snapper" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Snapper</a>, <a href="/species-aliases/baby-blues" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Baby blues</a>, <a href="/species-aliases/choppers" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Choppers</a>, <a href="/species-aliases/elfs" typeof="skos:Concept" property="rdfs:label skos:prefLabel" datatype="">Elfs</a>',
    speciesIllustrationPhoto: {
      src: 'https://www.fishwatch.gov/sites/default/files/bluefish.png',
      alt: 'Bluefish',
      title: 'Bluefish',
    },
    speciesName: 'Bluefish',
    animalHealth: null,
    availability:
      '<p>Fresh year-round, but varies by area. Not available frozen. Buy in season, and plan to cook within a day of purchase.</p>\n',
    biology:
      '<ul>\n<li>Bluefish live up to 12&nbsp;years.</li>\n<li>They grow fast, up to 31 pounds and 39 inches.</li>\n<li>They are able to reproduce at age 2, when they’re 15 to 20 inches in length.</li>\n<li>Depending on their size, females can have between 400,000 and 2 million eggs.</li>\n<li>Bluefish spawn multiple times in spring and summer.</li>\n<li>They exhibit feeding behavior called the “bluefish blitz,” where large schools of big fish attack bait fish near the surface, churning the water like a washing machine. They feed voraciously on their prey, eating almost anything they can catch and swallow.</li>\n<li>Bluefish have razor-sharp teeth and shearing jaws that allow them to ingest large parts, increasing the maximum size of the prey they can eat.</li>\n<li>They eat squid and fish, particularly menhaden and smaller fish such as silversides.</li>\n<li>Sharks, tunas, and billfishes are typically the only fish predators large and fast enough to prey on adult bluefish.</li>\n<li>Bluefish make up a major part of the diet of <a href="https://www.fishwatch.gov/profiles/atlantic-shortfin-mako-shark">shortfin mako sharks</a>&nbsp;and are also very important in the diets of <a href="https://www.fishwatch.gov/profiles/north-atlantic-swordfish">swordfish</a>.</li>\n<li>Oceanic birds prey on juvenile bluefish.</li>\n</ul>\n',
    bycatch: 'Regulations are in place to minimize bycatch.',
    calories: '124',
    carbohydrate: null,
    cholesterol: '59 mg',
    color:
      '<p>The meat of raw bluefish is light putty to blue-gray in color with a brownish tinge. It becomes lighter when cooked.</p>\n',
    diseaseTreatmentandPrevention: null,
    diseasesinSalmon: null,
    displayedSeafoodProfileIllustration: null,
    ecosystemServices: null,
    environmentalConsiderations: null,
    environmentalEffects: null,
    farmingMethods: null,
    fatTotal: '4.24 g',
    feeds_: null,
    feeds: null,
    fiberTotalDietary: null,
    fishingRate: 'At recommended level.',
    harvest:
      '<ul>\n<li>Commercial landings in 2018 totaled approximately 1,100 metric tons and were valued at more than $2.2 million.</li>\n<li>Recreational harvest in 2018 was estimated at over &nbsp;6,100metric tons.</li>\n<li>Florida, North Carolina, and New Jersey account for the largest percentage of the recreational bluefish harvest.</li>\n<li>Peak recreational harvest occurs from May through October with over 70 percent of the catch in July and August.</li>\n<li>Gear types, habitat impacts, and bycatch:\n<ul>\n<li>Recreational fishermen use hook-and-line gear that has minimal impacts on habitat.</li>\n<li>Commercial fishermen use a variety of gears including trawls, gillnets, haul seines, and pound nets, and the impacts vary by gear type.</li>\n<li>Gillnets can occasionally entangle marine mammals. However, the bluefish fishery uses nets with small mesh and sinking gillnets to reduce bycatch.</li>\n</ul>\n</li>\n</ul>\n',
    harvestType: null,
    healthBenefits:
      '<p>Bluefish are a good source of selenium, niacin, vitamin B12, magnesium, and potassium. As apex predators, bluefish can accumulate comparatively high levels of mercury and PCB contaminants. Limited consumption has been recommended in some states.</p>\n',
    human_Health_: null,
    humanHealth: null,
    physicalDescription:
      '<ul>\n<li>Bluefish are blue-green on the back and silvery on the sides and belly.</li>\n<li>They have a prominent jaw, with sharp, compressed teeth.</li>\n</ul>\n',
    production: null,
    protein: '20.04 g',
    quote:
      'U.S. wild-caught bluefish is a smart seafood choice because it is sustainably managed and responsibly harvested under U.S. regulations.',
    quoteBackgroundColor: '#89aec3',
    research: null,
    saturatedFattyAcidsTotal: '0.915 g',
    selenium: '36.5 mcg',
    servingWeight: null,
    servings: '1',
    sodium: '60 mcg',
    source: '<p>U.S. wild-caught from Massachusetts to Florida.</p>\n',
    sugarsTotal: null,
    taste:
      '<p>Rich, full flavor. The larger the fish, the more pronounced the taste. A strong-flavored, dark strip of meat on the fillet may be removed before cooking.</p>\n',
    texture: '<p>Coarse, moist meat with edible skin.</p>\n',
    path: '/profiles/bluefish',
    lastUpdate: '03/25/2020 - 12:58',
    href: 'https://line-ready-api.azurewebsites.net/fish/89',
    method: null,
    rel: null,
  },
];

@Injectable({
  providedIn: 'root',
})
export class FishService {
  serviceHelper: CommonService;

  getFishData = (): FishData[] => {
    for (const element of fishData) {
      for (const [key, value] of Object.entries(element)) {
        if (key !== 'speciesIllustrationPhoto') {
          element[key] = this.serviceHelper.removeHtmlTags(value);
        }
      }
    }
    return fishData;
  };

  constructor(service: CommonService) {
    this.serviceHelper = service;
  }
}
