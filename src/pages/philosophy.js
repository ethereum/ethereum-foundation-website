import React from "react"

import SideNav from "../components/SideNav"
import SEO from "../components/SEO"
import {
  PageContainer,
  PageH1,
  ContentContainer,
} from "../components/SharedStyledComponents"

const PhilosophyPage = () => {
  return (
    <>
      <SEO title="Philosophy of Subtraction" />
      <PageContainer>
        <ContentContainer>
          <PageH1>Our Philosophy</PageH1>
        </ContentContainer>
        <SideNav from="/ethereum/" to="/about/" />
        <ContentContainer>
          <p>The Ethereum Foundation is not Ethereum.</p>
          <p>
            We do not own Ethereum, operate it, or manage it. We are one of many
            organizations that cares deeply about Ethereum — its potential, and
            the values it represents.
          </p>
          <p>
            However, we know that we have a unique position within that
            ecosystem due to our history. Significant research, development, and
            community cultivation took place within the Ethereum Foundation.
            Today, we continue to fund development of many significant
            components of the Ethereum ecosystem.
          </p>
          <p>
            As Ethereum has grown and changed, so has the Ethereum Foundation.
            We know that it's not just what we do but how we do it that matters.
          </p>
          <p>
            To succeed long term, Ethereum needs a vibrant decentralized
            ecosystem with many independent organizations that provide funding,
            coordination, and leadership. Ethereum must remain a bazaar, and
            never become a cathedral.
          </p>
          <p>
            Instead of just asking "how do we solve this problem?" we ask "how
            can the Ethereum community solve this problem, and how can we help?"
          </p>
          <p>
            We often describe this as a philosophy of "Subtraction". This means
            resisting the natural tendency of organizations to grow and
            accumulate value within themselves, and cultivating value creation
            outside the Foundation in the broader Ethereum ecosystem:
          </p>
          <ul>
            <li>
              Instead of capturing opportunities, we distribute opportunities
              for others
            </li>
            <li>
              Instead of being defensive when others create value, we’re
              thrilled
            </li>
            <li>Instead of trying to matter more, we try to matter less</li>
          </ul>
          <p>
            Ultimately, any philosophy is only as good as the choices it
            inspires.
          </p>
        </ContentContainer>
      </PageContainer>
    </>
  )
}

export default PhilosophyPage
