import React from 'react'
import { setResponsiveTextSize } from '../../style/typography'
import LayoutGutter from '../Layout/LayoutGutter'
import LayoutLimiter from '../Layout/LayoutLimiter'
import LayoutRow from '../Layout/LayoutRow'
import { inclusiveUp } from '../../style/responsive'
import { WORK, WorkName } from '../../data/work'
import MetaSocial from '../Meta/MetaSocial'
import MoreWork from '../MoreWork/MoreWork'
import ImageBase from '../ImageBase/ImageBase'
import TextHeading from '../Text/TextHeading'
import { motion } from 'framer-motion'
import {
  ENTRANCE_TRANSITION_DELAY,
  ENTRANCE_TRANSITION_Y_DISTANCE,
  spring,
} from '../../style/motion'
import { useRelativeYMotion } from '../../hooks/useRelativeYMotion/useRelativeYMotion'

const MOTION_ORCHESTRATION = {
  staggerChildren: 0.05,
  delayChildren: ENTRANCE_TRANSITION_DELAY,
}

type WorkTemplate = {
  name: WorkName
  children: React.ReactNode
}

function WorkTemplate({ children, name }: WorkTemplate): JSX.Element {
  const entranceMotionVariants = useRelativeYMotion(
    ENTRANCE_TRANSITION_Y_DISTANCE
  )

  const {
    title,
    subtitle,
    excerpt,
    intro,
    tenure,
    role,
    technologies,
    heroImage,
    previewImage,
  } = WORK[name]

  return (
    <>
      <MetaSocial
        title={title}
        description={excerpt}
        previewImage={previewImage}
      />
      <article>
        <motion.div
          transition={MOTION_ORCHESTRATION}
          initial="hidden"
          animate="visible"
        >
          <header>
            <div
              css={`
                padding-top: 11rem;
                padding-bottom: 5rem;

                ${inclusiveUp('sm')} {
                  padding-top: 14rem;
                  padding-bottom: 6rem;
                }

                ${inclusiveUp('xl')} {
                  padding-top: 18rem;
                  padding-bottom: 9rem;
                }
              `}
            >
              <LayoutGutter>
                <LayoutLimiter>
                  <div
                    css={`
                      ${setResponsiveTextSize('display', 'lg')}
                    `}
                  >
                    <motion.div
                      variants={entranceMotionVariants}
                      transition={spring.snappy}
                    >
                      <TextHeading
                        size="lg"
                        css={`
                          margin-bottom: 0.3em;
                        `}
                      >
                        {title}
                      </TextHeading>
                    </motion.div>
                    <motion.div
                      variants={entranceMotionVariants}
                      transition={spring.snappy}
                    >
                      <TextHeading size="lg" tag="h2" color="extraLow">
                        {subtitle}
                      </TextHeading>
                    </motion.div>
                  </div>
                </LayoutLimiter>
              </LayoutGutter>
            </div>

            <motion.div
              variants={entranceMotionVariants}
              transition={spring.snappy}
            >
              <ImageBase imagePath={heroImage.imagePath} alt={heroImage.alt} />
            </motion.div>
          </header>

          <LayoutGutter>
            <LayoutRow>
              <LayoutLimiter
                css={`
                  display: grid;
                  grid-template-columns: 1fr;
                  grid-gap: 4rem;
                  width: 100%;

                  ${inclusiveUp('sm')} {
                    grid-template-columns: 25% 1fr;
                    grid-gap: 4rem;
                  }
                `}
              >
                <motion.div
                  variants={entranceMotionVariants}
                  transition={spring.snappy}
                  css={`
                    ${inclusiveUp('sm')} {
                      order: 2;
                    }
                  `}
                >
                  <TextHeading
                    tag="p"
                    size="sm"
                    lineHeight="longform"
                    weight="medium"
                    css={`
                      margin-bottom: 3em;
                    `}
                  >
                    {intro}
                  </TextHeading>

                  <TextHeading
                    tag="div"
                    size="xs"
                    lineHeight="longform"
                    weight="regular"
                    color="extraLow"
                  >
                    <div>{role}</div>
                    <div>{tenure}</div>
                  </TextHeading>
                </motion.div>

                <motion.ul
                  variants={entranceMotionVariants}
                  transition={spring.snappy}
                  css={`
                    ${inclusiveUp('sm')} {
                      order: 1;
                    }
                  `}
                >
                  {technologies.map((item, i) => (
                    <TextHeading
                      key={i}
                      tag="li"
                      size="xs"
                      weight="regular"
                      lineHeight="flat"
                      color="low"
                      css={`
                        &:not(:last-child) {
                          margin-bottom: 1.1em;
                        }
                      `}
                    >
                      {item}
                    </TextHeading>
                  ))}
                </motion.ul>
              </LayoutLimiter>
            </LayoutRow>
          </LayoutGutter>
        </motion.div>
        {children}
      </article>
      <MoreWork currentWorkName={name} />
    </>
  )
}

export default WorkTemplate
