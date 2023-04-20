import React from 'react';
import MouseDownLink from '../../components/MouseDownLink';
import ContentBlock from '../../components/page/Content';

const Philosophy = (props: any) => {
  return (
    <ContentBlock>
      <div id="content-body" className="disable--selection">
        <h1>The Philosophy of the EF</h1>
        <p>In the years since its establishment in 2015, the role of the EF has evolved and changed its shape along with the growth of the Ethereum ecosystem. In pursuit of how best to support the ecosystem and maintain the soul of Ethereum, we have discovered core principles that guide how the EF thinks and acts. These principles guide the decisions of EF leadership, and are an important influence throughout the EF&apos;s community of teams.</p>

        <h3>Long Term Thinking</h3>

        <p>Ethereum is a protocol for human coordination. It changes the way we view things in society and has the potential to improve different systems of the world. This means Ethereum&apos;s lifespan will stretch long into the future and the EF must have a long-term mindset. The impact of our work will be measured in decades and centuries - not quarters and fiscal years. We care not only for the interests of the community as it exists today, but for the community that will exist in the future. We are planting seeds for trees that we may not live to see mature.</p>

        <h3>Subtraction</h3>

        <p>The philosophy of subtraction guides us in multiple ways. We attempt to subtract our power and resist the natural tendency of organizations to grow and accumulate power. Instead of capturing opportunities for ourselves, we distribute those opportunities to the community. We don&apos;t compete with other organizations. We are thrilled when others create value because that means Ethereum is becoming more decentralized and sustainable.</p>

        <p>Second, we subtract to prioritize and focus on what is most important for Ethereum. Like a teapot, sometimes the usefulness of a thing is in where it is not. We try to remember that constant addition or growth is not always necessary, and might not be in Ethereum&apos;s best interest. Whenever possible, we remove ourselves from the equation, so that Ethereum flourishes with the support of a broad community of infinite gardeners, not just the EF.</p>

        <h3>Stewardship of values</h3>

        <p>A set of strong core values such as a commitment to decentralization, open access, and many more have guided the development of Ethereum since the beginning. These values have come to be the soul of Ethereum. We do not try to control or force the natural processes of the ecosystem, but we do try to help the community preserve its values, and in doing so help Ethereum to maintain its soul.</p>

        <MouseDownLink href="/" id="next-navigation">
          <object data="/assets/bottom-arrow.svg" width="50" height="50" aria-labelledby="Next"> Next</object>
          <p> Back Home </p>
        </MouseDownLink>
      </div>
    </ContentBlock>
  )
}

export default Philosophy;