import React from 'react';
import MouseDownLink from '../../components/MouseDownLink'
import ContentBlock from '../../components/page/Content';

const EthereumFoundation = () => {
  return (
    <ContentBlock>
      <div id="content-body" className="disable--selection">
        <h1>What is the EF?</h1>
        <p>The Ethereum Foundation (EF) is a non-profit that supports the Ethereum ecosystem. We are part of a larger community of organizations and individuals that fund protocol development, <MouseDownLink id="grow--ecosystem--link" href="https://esp.ethereum.foundation/">grow the ecosystem</MouseDownLink>, and advocate for Ethereum.</p>

        <p>Behind that simple description, the EF is hard to categorize. We are not a tech company, or a “normal” non-profit. Just as Ethereum requires new concepts and technologies, it has spawned new kinds of organizations.</p>

        <p>We are at the frontier of a new kind of organization: one that supports a blockchain and its ecosystem without controlling it. Since the Ethereum ecosystem evolves every day, it is important for the EF to also keep learning and evolving to support Ethereum&apos;s long term growth.</p>

        <p>Over the course of this evolution, the EF has become more like a community of teams than a traditional organization.</p>

        <div id="executive-board">
          <h3>Meet our Executive Board</h3>

          <div className="member">
            <img src="/assets/portrait-aya-miyaguchi.png" alt="Aya Miyaguchi, the Executive Director of Ethereum" height="150" width="150" />
            <div className="info">
              <h4 className="name">Aya Miyaguchi</h4>
              <p className="title">Executive Director</p>
              <MouseDownLink href="https://twitter.com/ayamiyagotchi" className="social-link">@AyaMiyagotchi</MouseDownLink>
            </div>
          </div>

          <div className="member">
            <img src="/assets/portrait-vitalik-buterin.png" alt="Vitalik Buterin, the Co-founder of Ethereum" height="150" width="150" />
            <div className="info">
              <h4 className="name">Vitalik Buterin</h4>
              <p className="title">Co-founder of Ethereum</p>
              <MouseDownLink href="https://twitter.com/VitalikButerin" className="social-link">@VitalikButerin</MouseDownLink>
            </div>
          </div>

          <div className="member">
            <img src="/assets/portrait-patrick-storchenegger.png" alt="Patrick Storchenegger, one of Ethereum's board members" height="150" width="150" />
            <div className="info">
              <h4 className="name">Patrick Storchenegger</h4>
              <p className="title">Board Member</p>
            </div>
          </div>

        </div>
        <MouseDownLink href="/whatwedo" id="next-navigation">
          <object data="/assets/bottom-arrow.svg" width="50" height="50" aria-labelledby="Next"> Next</object>
          <p>Read our story</p>
        </MouseDownLink>
      </div>
    </ContentBlock>
  )
}

export default EthereumFoundation;