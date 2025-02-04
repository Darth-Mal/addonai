import React, { useRef } from "react";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";

const Addonai = () => {
  const greenRectRef = useRef(null);

  const handleMouseMove = (e) => {
    const { clientX: mouseX, clientY: mouseY } = e;
    const greenRect = greenRectRef.current;

    // Get the position of the green rect relative to the page
    const { left, top, width, height } = greenRect.getBoundingClientRect();

    // Calculate the position of the mouse relative to the green rect
    const offsetX = mouseX - left;
    const offsetY = mouseY - top;

    // Apply the offset as a dynamic background position
    greenRect.style.backgroundPosition = `${(offsetX / width) * 100}% ${
      (offsetY / height) * 100
    }%`;

    // Dynamically update the position of the blur effect (::before pseudo-element)
    const blurElement = greenRect.querySelector(".blur");
    blurElement.style.left = `${offsetX - 150}px`; // Adjust to center the blur
    blurElement.style.top = `${offsetY - 150}px`; // Adjust to center the blur
  };

  return (
    <>
      <header></header>
      <div className="heropage">
        <div className="heropage--container">
          <h1 className="color-text">Addon AI</h1>
          <h1 className="grey-text">REVOLUTIONIZING AI & MONETIZATION</h1>
          <p className="body-text">
            AddOn AI combines AI and decentralized finance (DeFi) to
            revolutionize advertising monetization, offering innovative
            solutions that enhance effectiveness and streamline processes.
          </p>
        </div>

        <div className="btn-div">
          <button>
            Monetiser <EastOutlinedIcon />
          </button>
          <button>
            Agent Creator <EastOutlinedIcon />
          </button>
        </div>
      </div>

      <div className="page-2">
        <img className="bg" src="/bg.png" alt="" />
        <div className="bg-logo">
          <img src="/file.png" alt="" />

          <svg
            className="absolute inset-0 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 will-change-transform pointer-events-none blur-md"
            // width="480"
            // height="480"
            viewBox="0 0 480 480"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="pulse-a" x1="50%" x2="50%" y1="100%" y2="0%">
                <stop offset="0%" stopColor="#064E3B4d" />
                <stop offset="76.382%" stopColor="#115E594d" />
                <stop offset="100%" stopColor="#14532D4d" />
              </linearGradient>
            </defs>
            <g fillRule="evenodd">
              <path
                className="pulse"
                fill="url(#pulse-a)"
                fillRule="evenodd"
                d="M240,0 C372.5484,0 480,107.4516 480,240 C480,372.5484 372.5484,480 240,480 C107.4516,480 0,372.5484 0,240 C0,107.4516 107.4516,0 240,0 Z M240,88.8 C156.4944,88.8 88.8,156.4944 88.8,240 C88.8,323.5056 156.4944,391.2 240,391.2 C323.5056,391.2 391.2,323.5056 391.2,240 C391.2,156.4944 323.5056,88.8 240,88.8 Z"
              />
              <path
                className="pulse pulse-1"
                fill="url(#pulse-a)"
                fillRule="evenodd"
                d="M240,0 C372.5484,0 480,107.4516 480,240 C480,372.5484 372.5484,480 240,480 C107.4516,480 0,372.5484 0,240 C0,107.4516 107.4516,0 240,0 Z M240,88.8 C156.4944,88.8 88.8,156.4944 88.8,240 C88.8,323.5056 156.4944,391.2 240,391.2 C323.5056,391.2 391.2,323.5056 391.2,240 C391.2,156.4944 323.5056,88.8 240,88.8 Z"
              />
              <path
                className="pulse pulse-2"
                fill="url(#pulse-a)"
                fillRule="evenodd"
                d="M240,0 C372.5484,0 480,107.4516 480,240 C480,372.5484 372.5484,480 240,480 C107.4516,480 0,372.5484 0,240 C0,107.4516 107.4516,0 240,0 Z M240,88.8 C156.4944,88.8 88.8,156.4944 88.8,240 C88.8,323.5056 156.4944,391.2 240,391.2 C323.5056,391.2 391.2,323.5056 391.2,240 C391.2,156.4944 323.5056,88.8 240,88.8 Z"
              />
            </g>
          </svg>
        </div>
        <div className="page-2__text">
          <h4 className="color-text-small">Addon AI</h4>
          <h2 className="grey-text">Introduction</h2>
          <p className="body-text grey-text">
            Historically, ad monetization has been a cornerstone of Web2's
            exponential growth, enabling the digital economy to reach trillions
            of dollars by providing scalable and sustainable revenue models.
            Despite the surge in AI-driven projects, this essential strategy
            remains underutilized, leaving substantial potential untapped. AddOn
            AI is here to change the game by bridging this gap and introducing
            innovative monetization solutions tailored specifically for the AI
            ecosystem. Our platform leverages the proven success of advertising
            monetization in Web2 and adapts it to meet the unique needs of
            modern AI agents and social projects. By offering a decentralized,
            user-friendly environment, AddOn Ai empowers developers and project
            owners to seamlessly integrate advertising revenue streams,
            transforming their AI innovations into profitable ventures.
          </p>
        </div>
      </div>

      <div className="page-3 page">
        <div className="page-2-text">
          <h4 className="color-text">Addon AI Models</h4>
          <h1 className="grey-text">B2B Model</h1>
          <p className="grey-text">Monetizing AI Agents and Social Platforms</p>
        </div>
        <div className="btn-div btn-div-2">
          <button>
            B2B Model <EastOutlinedIcon style={{ color: "#00ac25" }} />
          </button>
          <button>
            B2C Model <EastOutlinedIcon style={{ color: "#00ac25" }} />
          </button>
        </div>

        <div className="highlights">
          <div className="AIPowered">
            <div className="AIPowered__text--container">
              <div className="AIPowered__header">
                {" "}
                <h3> Effortless Ad Space Rental</h3>
              </div>
              <div className="AIPowered__p">
                Simplifies the process of listing and renting ad spaces on AI
                agents and social platforms.
              </div>
            </div>
          </div>
          <div className="AIPowered">
            <div className="AIPowered__text--container">
              <div className="AIPowered__header">
                {" "}
                <h3> Effortless Ad Space Rental</h3>
              </div>
              <div className="AIPowered__p">
                Simplifies the process of listing and renting ad spaces on AI
                agents and social platforms.
              </div>
            </div>
          </div>
          <div className="AIPowered">
            <div className="AIPowered__text--container">
              <div className="AIPowered__header">
                {" "}
                <h3> Effortless Ad Space Rental</h3>
              </div>
              <div className="AIPowered__p">
                Simplifies the process of listing and renting ad spaces on AI
                agents and social platforms.
              </div>
            </div>
          </div>{" "}
          <div className="AIPowered">
            <div className="AIPowered__text--container">
              <div className="AIPowered__header">
                {" "}
                <h3> Effortless Ad Space Rental</h3>
              </div>
              <div className="AIPowered__p">
                Simplifies the process of listing and renting ad spaces on AI
                agents and social platforms.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="page-3 page">
        <div className="page-2-text">
          <p className="color-text">Empowered by Addon AI</p>
          <h1 className="grey-text">
            Harness the Full Potential of Your AI Infrastructure
          </h1>
          <p className="grey-text">
            Simplify AI deployment with a seamless dashboard for managing GPUs,
            workloads, and agents effortlessly.
          </p>
          <div className="heropage--container"></div>
        </div>
        <div className="btn-div btn-div-2">
          <button className="glowing-button">
            Explore Documentation{" "}
            <EastOutlinedIcon style={{ color: "#00ac25" }} />
          </button>
        </div>
      </div>

      <div className="page-4 page">
        <h1 className="grey-text">Roadmap Phases</h1>

        <p className=" align-left">Addon AI Roadmap</p>

        <div className="phase1and2">
          <div className="phase1">
            <p>
              <strong>Phase 1 – Foundation and Launch</strong>
            </p>

            <p className="paragraph">
              &#8226; Project idea implementation and initial development of AI
              agent tools. <br /> &#8226;Draft and publish the whitepaper
              alongside website development. <br /> &#8226;Execute pre-launch
              marketing to build community awareness.
              <br /> &#8226; Launch the AddOn Ai Bot, featuring tools like the
              Shadowban Analyzer and Tweet Crafter.
              <br /> &#8226; Official launch of the $AddOn token.
              <br /> &#8226; List $AddOn on visibility platforms such as
              Dextools, Dexscreener, CoinGecko (CG), and CoinMarketCap (CMC).
            </p>
          </div>

          <div className="phase2">
            <p>
              <strong>Phase 2 – Expansion and Collaboration</strong>
            </p>

            <p className="paragraph">
              &#8226; Launch targeted marketing campaigns to promote awareness.
              <br /> &#8226; Establish partnerships with DeFi projects, offering
              pre-booked free ad deals (3-day ad packages) upon AI ad agent
              launch. <br /> &#8226;Conduct a full audit of our upcoming web
              app’s smart contract. <br /> &#8226; Initiate internal and
              external testing to ensure platform stability.
            </p>
          </div>
        </div>

        <div className="phase1and2">
          <div className="phase1">
            <p>
              <strong>Phase 3 – Product Rollout and Scaling</strong>
            </p>

            <p className="paragraph">
              &#8226; Launch the AddOn Ai Monetiser platform and API.
              <br /> &#8226; Deploy the AI Ad Agent Creator Web App. <br />{" "}
              &#8226;Initiate AMA (Ask Me Anything) sessions across Twitter,
              Telegram, and YouTube to highlight the platform's capabilities.
              <br /> &#8226; Use the incentive fund to attract and onboard new
              projects through appealing offers.
              <br /> &#8226;Assemble an ambassador team to strengthen brand
              presence. <br /> &#8226;Expand the AddOn Ai team to support
              operational growth and enhance development.
            </p>
          </div>

          <div className="phase2">
            <p>
              <strong>Phase 4 – Future Growth and Innovation</strong>
            </p>

            <p className="paragraph">
              &#8226;Introduce a new whitepaper and roadmap to align with
              evolving market conditions and platform advancements. <br />{" "}
              &#8226; Focus on continuous growth, new partnerships, and feature
              development to maintain competitive edge and expand user base.
            </p>
          </div>
        </div>
      </div>

      <div className="page-5 page" onMouseMove={handleMouseMove}>
        <div className="green-rect" ref={greenRectRef}>
          <div className="green-rect-text">
            <h3 className="grey-text">Optimized for security</h3>
            <p className="grey-text">
              AddOn AI prioritizes security to ensure a safe and reliable
              platform for users, advertisers, and developers. Our multi-layered
              security measures protect data, prevent fraud, and secure smart
              contracts, fostering trust and long-term platform stability.
            </p>
            <button className="page-5-btn">
              Learn more
              <EastOutlinedIcon style={{ color: "#00ac25" }} />
            </button>
          </div>
          <div className="img-div">
            <img src="bg.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Addonai;
