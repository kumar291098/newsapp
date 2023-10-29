import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

    articles = [
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "John Miller, Evan Perez, Josh Campbell, Aya Elamroussi, Holly Yan",
            "title": "Suspect in Maine shooting rampage is dead from apparent self-inflicted gunshot, authorities say - CNN",
            "description": "The US Army reservist accused of killing 18 people and injuring 13 others in a shooting rampage in Maine this week was found dead Friday evening – apparently from a self-inflicted gunshot – after a two-day manhunt, a state official said.",
            "url": "https://www.cnn.com/2023/10/27/us/maine-shootings-suspect-search-friday/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/231027221010-01-robert-card-photo.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2023-10-28T06:36:00Z",
            "content": "A US Army reservist accused of killing 18 people and injuring 13 others in a shooting rampage in Maine this week was found dead Friday evening apparently from a self-inflicted gunshot after a two-day… [+9239 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Athletic"
            },
            "author": "Andy McCullough",
            "title": "García's walk-off HR in 11th lifts Rangers to Game 1 win - The Athletic",
            "description": "Game 2 is set for Saturday at 8:03 p.m. ET in Arlington, Texas.",
            "url": "https://theathletic.com/5006459/2023/10/28/diamondbacks-rangers-world-series-game-1-result/",
            "urlToImage": "https://cdn.theathletic.com/app/uploads/2023/10/28002545/Garcia-scaled.jpg",
            "publishedAt": "2023-10-28T04:45:18Z",
            "content": "ARLINGTON, Texas He hollered upon impact, his voice lost in the maelstrom at Globe Life Field, his body inadvertently impersonating his first World Series home run, six years ago. Corey Seager holler… [+7357 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": "Alexandre Meneghini, Josue Decavele",
            "title": "Mexico's Acapulco ravaged by looting after Hurricane Otis - Reuters Canada",
            "description": "Looting ravaged the Mexican city of Acapulco after the iconic beach resort was hammered this week by Hurricane Otis, a record-breaking storm that killed at least 27 people and left thousands of residents struggling to get food and water.",
            "url": "https://www.reuters.com/world/americas/mexico-starts-clearing-up-hurricane-otis-wreckage-casualties-reach-27-2023-10-27/",
            "urlToImage": "https://www.reuters.com/resizer/Vuq4u9TC5Dx1mrd51Klro-r4HiE=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/D2Z3TADK5FPEXDRFWUZN2SVRFU.jpg",
            "publishedAt": "2023-10-28T04:35:00Z",
            "content": "ACAPULCO, Mexico, Oct 27 (Reuters) - Looting ravaged the Mexican city of Acapulco after the iconic beach resort was hammered this week by Hurricane Otis, a record-breaking storm that killed at least … [+4895 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "Israel increases incursions into Gaza, Maine shooting investigation, more | CBS News Weekender - CBS News",
            "description": "Catherine Herridge reports on the Israeli military expanding operations in Gaza, the manhunt for a shooting suspect in Maine, and U.S. airstrikes on Syria.#n...",
            "url": "https://www.youtube.com/watch?v=wKX4KlqArG0",
            "urlToImage": "https://i.ytimg.com/vi/wKX4KlqArG0/maxresdefault.jpg",
            "publishedAt": "2023-10-28T03:14:31Z",
            "content": null
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Marshall Cohen, Annie Grayer",
            "title": "US attorney who initially vetted Biden bribery tip explains why it deserved further scrutiny - CNN",
            "description": "The US attorney who in 2020 vetted unverified claims from an FBI informant about alleged Ukrainian bribes paid to the Bidens recently testified to House lawmakers that he found some of the material credible enough to pass the tip along to the prosecutor leadi…",
            "url": "https://www.cnn.com/2023/10/27/politics/us-attorney-biden-bribery-tip-scrutiny/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230509190237-joe-hunter-biden-feb-2023.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2023-10-28T02:47:00Z",
            "content": "The US attorney who in 2020 vetted unverified claims from an FBI informant about alleged Ukrainian bribes paid to the Bidens recently testified to House lawmakers that he found some of the material c… [+6810 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "KSAT San Antonio"
            },
            "author": "Avery Everett",
            "title": "'She declined so fast': Parents, doctors warn of RSV as cases increase across San Antonio - KSAT San Antonio",
            "description": "The CDC issued a Health Alert Network Health Advisory to provide options for doctors to protect infants from RSV as there is a limited supply of nirsevimab, a monoclonal antibody immunization to help with RSV.",
            "url": "https://www.ksat.com/news/local/2023/10/28/she-declined-so-fast-parents-doctors-warn-of-rsv-as-cases-increase-across-san-antonio/",
            "urlToImage": "https://res.cloudinary.com/graham-media-group/image/upload/f_auto/q_auto/c_thumb,w_700/v1/arc-cf/10-28-2023/t_3106a357ad184e7eae95f810bd82a6f8_name_image.jpg?_a=ATAPphC0",
            "publishedAt": "2023-10-28T01:51:27Z",
            "content": "SAN ANTONIO Taylor Roby Perez said the week her daughter, Isabel, was diagnosed with Respiratory Syncytial Virus (RSV) felt like a rollercoaster.\r\nShe declined so fast, Roby Perez said. She went from… [+2517 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Eonline.com"
            },
            "author": "Alexandra Bellusci",
            "title": "Heather Rae El Moussa Diagnosed With Hashimoto's Disease - E! NEWS",
            "description": "Heather Rae El Moussa shared she has an autoimmune disorder, which at first she thought was \"mom brain\" but was actually Hashimoto's disease brought on by her pregnancy.",
            "url": "https://www.eonline.com/news/1388859/heather-rae-el-moussa-diagnosed-with-hashimotos-disease",
            "urlToImage": "https://akns-images.eonline.com/eol_images/Entire_Site/202396/cr_1200x1200-231006161050-GettyImages-1327746575.jpg?fit=around%7C1080:1080&output-quality=90&crop=1080:1080;center,top",
            "publishedAt": "2023-10-28T01:51:00Z",
            "content": "Heather Rae El Moussa is getting candid about her health.\r\nThe Selling Sunset star revealed she has been diagnosed with Hashimoto's disease, eight months after welcoming son Tristan with husband Tare… [+879 chars]"
        },
        {
            "source": {
                "id": "politico",
                "name": "Politico"
            },
            "author": null,
            "title": "Agreement reached for Biden-Xi talks, official says - POLITICO",
            "description": "The official added that two sides have still not worked out details on the exact day of the meeting, venue and other logistics.",
            "url": "https://www.politico.com/news/2023/10/27/agreement-reached-biden-xi-talks-00124084",
            "urlToImage": "https://static.politico.com/de/2d/9017988a4767826733d0244bde21/china-us-48774.jpg",
            "publishedAt": "2023-10-28T00:29:52Z",
            "content": "President Joe Biden (right) stands with Chinese President Xi Jinping before a meeting on the sidelines of the G20 summit meeting in 2022, in Bali, Indonesia. | Alex Brandon/AP\r\nBy Associated Press\r\n1… [+705 chars]"
        },
        {
            "source": {
                "id": "cbs-news",
                "name": "CBS News"
            },
            "author": "Christine Sloan",
            "title": "Dozens taken into custody inside Grand Central Station at rally calling for ceasefire in Gaza - CBS New York",
            "description": "Hundreds of demonstrators from a Jewish activist group made their way into Grand Central Terminal's main concourse.",
            "url": "https://www.cbsnews.com/newyork/news/grand-central-terminal-gaza-ceasefire-rally/",
            "urlToImage": "https://assets1.cbsnewsstatic.com/hub/i/r/2023/10/27/c5b1f9ed-ec58-4f42-936b-d2cf519b4c12/thumbnail/1200x630/48e55984ca6a81776037e6c0f868da09/palestinian-community-cs-hi-res-still.jpg?v=5799c2de91a486f8a37c0b0f0daf468a",
            "publishedAt": "2023-10-28T00:26:00Z",
            "content": "NEW YORK -- Hundreds of demonstrators took over Grand Central Terminal on Friday, calling for a ceasefire in the Israel-Hamas war.\r\nPolice took about 100 people into custody.\r\nHundreds of demonstrato… [+2633 chars]"
        },
        {
            "source": {
                "id": "the-verge",
                "name": "The Verge"
            },
            "author": "Elizabeth Lopatto",
            "title": "The jury finally hears from Sam Bankman-Fried - The Verge",
            "description": "Sam Bankman-Fried’s direct testimony is already chewing away at his credibility and the judge’s patience.",
            "url": "https://www.theverge.com/2023/10/27/23935683/sam-bankman-fried-ftx-fraud-direct-testimony-jury",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/SMmxjzMXWuJ7pbFcl19i53Bch7o=/0x0:2040x1360/1200x628/filters:focal(1152x546:1153x547)/cdn.vox-cdn.com/uploads/chorus_asset/file/25038561/236817_SBF_Trial_Stock_CVirginia_I.jpg",
            "publishedAt": "2023-10-28T00:12:00Z",
            "content": "ByElizabeth Lopatto, a reporter who writes about tech, money, and human behavior. She joined The Verge in 2014 as science editor. Previously, she was a reporter at Bloomberg. \r\nOct 28, 2023, 12:12 AM… [+9764 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "Tyson Fury warns Sugar Ray Leonard: \"Don't pick Ngannou over me!\" - The Sun Sport",
            "description": "Sugar Ray Leonard stops on the red carpet to give his opinions on Battle of the Baddest before Tyson Fury interrupts the interview with a message to the lege...",
            "url": "https://www.youtube.com/watch?v=feMhL-n6Hu4",
            "urlToImage": "https://i.ytimg.com/vi/feMhL-n6Hu4/maxresdefault.jpg",
            "publishedAt": "2023-10-28T00:00:30Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "Post Magazine"
            },
            "author": null,
            "title": "Li Keqiang’s sudden death ‘a total surprise’ to China’s top leaders - South China Morning Post",
            "description": "‘State media obviously did not prepare full obituary’ as they do for very ill leaders, while brief initial announcement aimed to quash conspiracy theories, observer says.",
            "url": "https://www.scmp.com/news/china/politics/article/3239493/former-premier-li-keqiangs-sudden-death-total-surprise-chinas-top-leaders",
            "urlToImage": "https://cdn.i-scmp.com/sites/default/files/styles/og_image_scmp_generic/public/d8/images/canvas/2023/10/27/a29e87b0-a408-4aad-b713-23365733441e_b158c2ab.jpg?itok=ZcRlLTUL&v=1698415970",
            "publishedAt": "2023-10-28T00:00:17Z",
            "content": "But it was another 10 hours before Beijing released an official obituary. Published by Xinhua around 6.30pm, the document was signed by the ruling Communist Party leadership, who praised Lis contribu… [+4199 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Variety"
            },
            "author": "Cynthia Littleton",
            "title": "‘Billions’ Finale: How Axe, Chuck, Wendy, Taylor, Wags and More Find Their Way Home After Seven Seasons - Variety",
            "description": "After seven seasons, drama series 'Billions' ended much as it began with a finale episode, 'Admirals Fund,' designed to please longtime fans.",
            "url": "https://variety.com/2023/tv/news/billions-finale-damian-lewis-paul-giamatti-admirals-fund-1235771238/",
            "urlToImage": "https://variety.com/wp-content/uploads/2023/10/Billions-finale.Lewis-Giamatti.jpg?w=1000&h=563&crop=1",
            "publishedAt": "2023-10-27T23:51:00Z",
            "content": "SPOILER ALERT: This article contains spoilers for “Admirals Fund,” the series finale of “Billions,” now streaming on Paramount+.\r\n“Billions” ends where it began. At the close of “Admirals Fund,” the … [+6914 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Investor's Business Daily"
            },
            "author": "Investor's Business Daily",
            "title": "Dow Jones Futures: Apple, Fed Loom For Battered Market; Microsoft Leads Stocks To Watch - Investor's Business Daily",
            "description": null,
            "url": "https://www.investors.com/market-trend/stock-market-today/dow-jones-futures-apple-fed-loom-for-battered-market-microsoft-leads-stocks-to-watch/",
            "urlToImage": null,
            "publishedAt": "2023-10-27T23:47:00Z",
            "content": null
        },
        {
            "source": {
                "id": "the-hill",
                "name": "The Hill"
            },
            "author": "Lauren Irwin",
            "title": "GM, Stellantis to offer to match pay hike included in UAW-Ford deal - The Hill",
            "description": "General Motors and Jeep maker Stellantis are expected to offer the United Auto Workers (UAW) union a deal that mirrors the agreement recently struck with Ford. UAW members and Ford reached a tentative labor agreement Wednesday, the union announced, ending six…",
            "url": "https://thehill.com/business/4280477-gm-stellantis-to-offer-to-match-pay-hike-included-in-uaw-ford-deal/",
            "urlToImage": "https://thehill.com/wp-content/uploads/sites/2/2023/08/64f120c7d8cdb8.22324567.jpeg?w=1280",
            "publishedAt": "2023-10-27T23:28:00Z",
            "content": "Skip to content\r\nGeneral Motors and Jeep maker Stellantis are expected to offer the United Auto Workers (UAW) union a deal that mirrors the agreement recently struck with Ford.\r\nUAW members and Ford … [+1463 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CBS Sports"
            },
            "author": "",
            "title": "College football picks, schedule: Predictions against the spread, odds, top 25 games in Week 9 - CBS Sports",
            "description": "A closer look at the top games for the ninth week of the 2023 college football season",
            "url": "https://www.cbssports.com/college-football/news/college-football-picks-schedule-predictions-against-the-spread-odds-top-25-games-in-week-9/",
            "urlToImage": "https://sportshub.cbsistatic.com/i/r/2023/10/24/de27d575-961d-43ce-9605-3a078baf6a9e/thumbnail/1200x675/6c08dcc2511aafd03a1b421834b303af/ohio-state.jpg",
            "publishedAt": "2023-10-27T23:21:00Z",
            "content": "Call it \"Separation Saturday\" if you choose, but there's no doubt that the landscape of the sport will shift in Week 9 ahead of the first College Football Playoff Rankings on Tuesday. Even though man… [+5496 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "Dean Phillips files for presidential run in New Hampshire - KARE 11",
            "description": "Minnesota Democratic U.S. Rep. Dean Phillips formally filed paperwork Friday morning to run in New Hampshire's 2024 Democratic presidential primary, accordin...",
            "url": "https://www.youtube.com/watch?v=Qy3FSS0FbEo",
            "urlToImage": "https://i.ytimg.com/vi/Qy3FSS0FbEo/maxresdefault.jpg",
            "publishedAt": "2023-10-27T23:17:57Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "Motorsport.com"
            },
            "author": "Alex Kalinauckas",
            "title": "F1 Mexico GP: Verstappen leads FP2 from Norris, Leclerc - Motorsport.com",
            "description": "Max Verstappen made it a clean sweep of practice sessions at Formula 1's 2023 Mexican Grand Prix, Red Bull's Dutchman finishing ahead of Lando Norris and Charles Leclerc in FP2.",
            "url": "https://www.motorsport.com/f1/news/f1-mexico-gp-verstappen-leads-fp2-from-norris-leclerc/10538913/",
            "urlToImage": "https://cdn-5.motorsport.com/images/amp/6O1aP7P2/s6/max-verstappen-red-bull-racing.jpg",
            "publishedAt": "2023-10-27T23:04:38Z",
            "content": "After Daniel Ricciardo, Norris, Verstappen and Alex Albon had enjoyed brief spells in the top spot during the opening quarter of the one-hour session, Verstappen seized it again with a 1m19.511s set … [+3318 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Deadline"
            },
            "author": "Matt Grobar",
            "title": "‘Killers Of The Flower Moon’ Intermission Imposed By Handful Of Theaters Spurs Intervention - Deadline",
            "description": "A handful of theaters across the globe have imposed their own intermission on Martin Scorsese’s Killers of the Flower Moon, Deadline has confirmed, leading to intervention on the part of the …",
            "url": "https://deadline.com/2023/10/killers-of-the-flower-moon-intermissions-paramount-1235585730/",
            "urlToImage": "https://deadline.com/wp-content/uploads/2023/10/MCDKIOF_PA029-e1698445086723.jpg?w=1024",
            "publishedAt": "2023-10-27T22:33:00Z",
            "content": "A handful of theaters across the globe have imposed their own intermission on Martin Scorsese’s Killers of the Flower Moon, Deadline has confirmed, leading to intervention on the part of the Apple pi… [+1601 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "KSL.com"
            },
            "author": "https://www.facebook.com/kslcom/",
            "title": "Pfizer, BioNtech say flu-COVID shot generates strong immune response in trial - KSL.com",
            "description": "Pfizer and German partner BioNTech said on Thursday that their vaccine to prevent flu and COVID-19 generated a strong immune response against strains of the viruses in an early- to mid-stage trial.",
            "url": "https://www.ksl.com/article/50765514/pfizer-biontech-say-flu-covid-shot-generates-strong-immune-response-in-trial",
            "urlToImage": "https://img.ksl.com/slc/2954/295400/29540086.JPG?filter=kslv2/responsive_story_lg",
            "publishedAt": "2023-10-27T22:32:56Z",
            "content": "Estimated read time: Less than a minute\r\nNEW YORK Pfizer and German partner BioNTech said on Thursday that their vaccine to prevent flu and COVID-19 generated a strong immune response against strains… [+738 chars]"
        }
    ]


    constructor() {
        super()
        console.log("hello world")
        
        this.state={
            articles : this.articles,
            loading:false
        }

    }
    render() {
        return (
            <div className='container my-3'>
                <h2>New top headlines</h2>
                <div className="row">
                    <div className="col-md-4">
                        <NewsItem title="my title" description=" My description" ImageUrl="https://cdn.theathletic.com/app/uploads/2023/10/28002545/Garcia-scaled.jpg" newsUrl="TODO"  />

                    </div>
                    <div className="col-md-4">
                        <NewsItem title="my title" description=" My description" />

                    </div>
                    <div className="col-md-4">
                        <NewsItem title="my title" description=" My description" />

                    </div>
                </div>


            </div>
        )
    }
}

export default News
