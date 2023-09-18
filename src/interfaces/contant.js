import Metaversus from '../assets/portfolio-img1.png'
import Random from '../assets/portfolio-img2.png'
import CovidTracker from '../assets/portfolio-img3.png'
import Netflix from '../assets/portfolio-img4.png'

export const projectList = projects => {
  return projects?.map(item => {
    return {
      ...item,
      image: item.code === "metaversus"
              ? Metaversus
              : item.code === "netflix-clone"
                ? Netflix
                : item.code === "covid19-tracker"
                  ? CovidTracker
                  : Random
    }
  })
}