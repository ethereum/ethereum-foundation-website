"use client"

import React, { useEffect } from "react"
import Link from "../../components/Link"
import ContentBlock from "../../components/page/Content"
import { loadAndCacheTexture } from "components/page/animate"

const ConflictOfInterestPolicyPage = () => {
  useEffect(() => {
    loadAndCacheTexture("/ef")
  }, [])

  return (
    <ContentBlock>
      <style jsx global>{`
        ul {
          padding: 0;
          margin: 0;
        }
        h2 {
          margin-block: 35px;
        }
        .list-heading {
          text-align: left;
          font-size: 18px;
          padding: 0px;
          margin-bottom: 8px;
          font-weight: 600;
        }   
        section {
            padding:0 100px;
            @media (max-width: 900px) {
              padding:0 50px;
            }
            @media (max-width: 500px) {
              font-size: 16px;
              padding:0 20px;
            }
        }
        ul, ul ul {
          margin-left: 20px;
        }
      `}</style>
      <div id="content-body" className="disable--selection">
        <h1>Ethereum Foundation Conflict of Interest Policy</h1>
        <p>
          In order to serve the Ethereum ecosystem the EF must have high
          integrity. This means that our actions must be sincerely motivated by
          the long-term interests of the Ethereum ecosystem.
        </p>

        <p>
          To preserve that integrity, the EF has adopted a conflict of interest
          (COI) policy in 2024. The purpose of this policy is to help guide and
          set some boundaries for EF team members (“EFers”) on how they navigate
          certain relationships with the broader Ethereum ecosystem, especially
          where such relationships could affect the EF’s integrity or
          reputation for integrity.
        </p>

        <p>
          The most important way in which we preserve the EF’s integrity is by
          hiring people who already demonstrate high integrity, and for them to
          exercise good judgment. This policy is intended to support EFers in
          exercising such good judgment, by providing clearer guidance,
          establishing a process by which EFers can discuss specific
          circumstances, and setting some boundaries we believe are necessary
          to deal with extreme cases.
        </p>

        <p>
          Following the first year of operating the initial policy (v 1.0), we
          assessed its performance, collected feedback, and made updates. We
          plan to review the policy annually and refine it as the ecosystem and
          our understanding progress.
        </p>

        <section>
        <h2>Summary of EF Conflict of Interest Policy v 1.1</h2>
        
          <p className="list-heading">
            EFers can invest in liquid crypto assets without limits
          </p>
            <ul>
              <li>
                But must tell the EF about investments above $500K (other than
                ETH)
              </li>
              <li>
                In some cases, extremely high exposure might require recusal
                from decisions that relate to the conflict, or other
                mitigations
              </li>
            </ul>
          <p className="list-heading">
            For other potential conflicts of interest, EFers must consult with
            an internal discussion group composed of EF management, the
            EFer’s team lead, EF legal, EF people ops, and other EFers
            currently serving a rotating 1-year term in the internal
            discussion group.
          </p>
            <ul>
              <li>
                The goal of the discussion group is for the EFer and others to
                think together through the risks, downsides, and upsides of the
                opportunity
              </li>
              <li>
                The EFer shares responsibility for considering how a potential
                conflict could impact the EF’s integrity
              </li>
              <li>
                In some cases, the discussion group might require mitigations
                like recusals on certain decisions relating to the potential
                conflict, or deny the opportunity entirely
              </li>
            </ul>
        

        <h2>
          Examples of specific categories of potential conflicts of interest:
        </h2>
        
          <p className="list-heading">
            EFers can take on work outside the EF with liquid pay at observable
            fair market value
          </p>
            <ul>
              <li>
                But must tell the EF before starting and consult their team
                lead
              </li>
              <li>
                If the total value of the outside work is above $25K annually,
                it must be reviewed by the discussion group
              </li>
            </ul>
          <p className="list-heading">
            EFers can take on work outside the EF with illiquid/locked pay at
            observable fair market value and in untraded assets
          </p>
            <ul>
              <li>
                But must tell the EF, and the discussion group must review it
              </li>
              <li>
                The discusion group will consider factors like:
                <ul>
                  <li>
                    Whether the EFer’s work is directly related to the subject
                    of the outside work
                  </li>
                  <li>
                    Whether we have information about the value of the asset
                    used for payment
                  </li>
                  <li>
                    Whether there is significant upside to the Ethereum
                    ecosystem for the EFer to accept the opportunity
                  </li>
                </ul>
              </li>
            </ul>
          <p className="list-heading">
            EFers can make angel investments
          </p>
            <ul>
              <li>But must tell the EF before investing</li>
              <li>
                Investments above $10K USD should be disclosed before making
                them; the discussion group reviews them and may set
                mitigations.
              </li>
            </ul>
          <p className="list-heading">
            EFers can invest in funds
          </p>
            <ul>
              <li>
                But must tell the EF before investing, and the discussion group
                must review each investment
              </li>
            </ul>
          <p className="list-heading">
            EFers can co-found projects while at the EF
          </p>
            <ul>
              <li>
                But must tell the EF before co-founding, and it must be
                reviewed by the discussion group
              </li>
              <li>
                Must be regularly re-assessed for material changes, which may
                result in future mitigations
              </li>
              <li>
                EFers must understand and accept the risk that co-founding a
                project could develop into a situation that is incompatible
                with staying at the EF
              </li>
            </ul>
        

        <p className="list-heading">Additional notes</p>
        <ul>
          <li>
            This COI policy applies only to potential conflicts within the
            crypto and web3 ecosystem
          </li>
          <li>
            EFers need to annually update their internal conflict disclosures
            to EF leadership
          </li>
          <li>
            This policy applies to all full and part-time EFers, including
            contractors and employees
          </li>
          <li>
            However, this policy does not apply to EF interns, fellows,
            grantees, or certain advisory roles
          </li>
        </ul>
        </section>

        <Link href="/" id="next-navigation">
          <object
            data="/assets/double-spirale-white.svg"
            width="50"
            height="50"
            aria-labelledby="Next"
          >
            {" "}
            Next
          </object>
          <span> Back Home </span>
        </Link>
      </div>
    </ContentBlock>
  )
}

export default ConflictOfInterestPolicyPage
