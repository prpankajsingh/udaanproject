import React from "react";

import "./Publications.css";
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/navigation/navigation.scss";

import SwiperCore, { Navigation, Pagination } from "swiper";
SwiperCore.use([Navigation, Pagination]);

// import { useTranslation } from "react-i18next";
// import { Swiper, SwiperSlide } from "swiper/react";


function Publications() {
  // const { t } = useTranslation();
  return (
    <div className="publications container" id="Publications">
      <p className="publications_title">Publications</p>

      <h4 style={{marginBottom: "0px"}} className="fadeInDown">Translation and Post-Editing </h4>

      <div className="row">
        <div className="row">          
          <div className="paper-container">
            <div className="paper">
              <a className="paper-title" target="_blank" href="https://arxiv.org/pdf/2203.01644.pdf">
                UDAAN - Machine Learning based Post-Editing tool for Document Translation
              </a>
              <p className="paper-authors">
                Ayush Maheshwari, and others
              </p>
              <p className="paper-conference">
                CODS-COMAD Demonstrations 2023.
              </p>
            </div>

            <div className="paper">
              <a className="paper-title" target="_blank" href="https://arxiv.org/pdf/2108.00373.pdf">
                A Benchmark and Dataset for Post-OCR text correction in Sanskrit
              </a>
              <p className="paper-authors">
                Ayush Maheshwari, and others
              </p>
              <p className="paper-conference">
                EMNLP 2022.
              </p>
            </div>

            <div className="paper">
              <a className="paper-title" target="_blank" href="https://www.cse.iitb.ac.in/~ganesh/papers/aaai2021.pdf">
                Semi-Supervised Data Programming with Subset Selection
              </a>
              <p className="paper-authors">
                Ayush Maheshwari, and others
              </p>
              <p className="paper-conference">
                ACL, 2021.
              </p>
            </div>
            
            <div className="paper">
              <a className="paper-title" target="_blank" href="https://arxiv.org/pdf/2108.00373.pdf">
                SPEAR: Semi-supervised Data Programming in Python
              </a>
              <p className="paper-authors">
                Guttu Sai Abhishek, and others
              </p>
              <p className="paper-conference">
                EMNLP Demonstrations, 2022.
              </p>
            </div>

            <div className="paper">
              <a className="paper-title" target="_blank" href="https://arxiv.org/pdf/2210.06996.pdf">
                DICTDIS: Dictionary Constrained Disambiguation for Improved NMT
              </a>
              <p className="paper-authors">
                Ayush Maheshwari, and others
              </p>
              {/* <p className="paper-conference">
                EMNLP 2022.
              </p> */}
            </div>
            
            <div className="paper">
              <a className="paper-title" target="_blank" href="https://www.cse.iitb.ac.in/~ganesh/papers/acl2021c.pdf">
              Rule Augmented Unsupervised Constituency Parsing
              </a>
              <p className="paper-authors">
              Atul Sahay, and others
              </p>
              <p className="paper-conference">
                ACL, 2021
              </p>
            </div>

            <div className="paper">
              <a className="paper-title" target="_blank" href="https://www.cse.iitb.ac.in/~ganesh/papers/aaai2020.pdf">
              Data Programming using Continuous and Quality-Guided Labeling Function 
              </a>
              <p className="paper-authors">
              Oishik Chatterjee, and others
              </p>
              <p className="paper-conference">
                AAAI, 2020
              </p>
            </div>

            <div className="paper">
              <a className="paper-title" target="_blank" href="https://www.aaai.org/ocs/index.php/AAAI/AAAI18/paper/download/16911/15686#:~:text=We%20describe%20MultiSynth%2C%20a%20framework,generalizes%20over%20all%20the%20examples.">
              Synthesis of Programs from Multimodal Datasets
              </a>
              <p className="paper-authors">
                Shantanu Thakoor, and others
              </p>
              <p className="paper-conference">
                AAAI, 2018
              </p>
            </div>
              
            <h4 style={{marginBottom: "0px", marginTop: "1em"}} className="fadeInDown">Dictionary Organization and Constraint Induction </h4>

            <div className="paper">
              <a className="paper-title" target="_blank" href="https://arxiv.org/pdf/2109.11410.pdf">
                Learning to Robustly Aggregate Labeling Functions for Semi-supervised Data Programming
              </a>
              <p className="paper-authors">
                Ayush Maheshwari, and others
              </p>
              <p className="paper-conference">
                ACL 2022
              </p>  
            </div>

            <div className="paper">
              <a className="paper-title" target="_blank" href="https://arxiv.org/pdf/2101.04997.pdf">
                Joint Learning of Hyperbolic Label Embeddings for Hierarchical Multi-label classNameification
              </a>
              <p className="paper-authors">
                Ayush Maheshwari, and others
              </p>
              <p className="paper-conference">
                EACL 2021
              </p>  
            </div>
          
            <div className="paper">
              <a className="paper-title" target="_blank" href="https://www.cse.iitb.ac.in/~ganesh/papers/pakdd16.pdf">
                Building Compact Lexicons for Cross-Domain SMT by Mining Near-Optimal Pattern Sets
              </a>
              <p className="paper-authors">
                Pankaj Singh, and others
              </p>
              <p className="paper-conference">
                PAKDD 2016
              </p>  
            </div>

            <div className="paper">
              <a className="paper-title" target="_blank" href="https://www.cse.iitb.ac.in/~ganesh/papers/emnlp12.pdf">
                Towards Efficient Named-Entity Rule Induction for Customizability
              </a>
              <p className="paper-authors">
                Ajay Nagesh, and others
              </p>
              <p className="paper-conference">
                EMNLP 2012
              </p>  
            </div>

            <div className="paper">
              <a className="paper-title" target="_blank" href="https://www.cse.iitb.ac.in/~ganesh/papers/icml11.pdf">
                Efficient Rule Ensemble Learning using Hierarchical Kernels
              </a>
              <p className="paper-authors">
                Pratik Jawanpuria, and others
              </p>
              <p className="paper-conference">
                ICML 2011
              </p>  
            </div>
              
            <h4 style={{marginBottom: "0px", marginTop: "1em"}} className="fadeInDown">OCR </h4>

            <div className="paper">
              <a className="paper-title" target="_blank" href="https://www.cse.iitb.ac.in/~ganesh/papers/icdar2019b.pdf">
                OCR On-the-Go: Robust End-to-end Systems for Reading License Plates &amp; Street Signs
              </a>
              <p className="paper-authors">
                Rohit Saluja, and others
              </p>
              <p className="paper-conference">
                ICDAR 2019
              </p>  
            </div>

            <div className="paper">
              <a className="paper-title" target="_blank" href="https://www.cse.iitb.ac.in/~ganesh/papers/icdarost2019.pdf">
                StreetOCRCorrect: An Interactive Framework forOCR Corrections in Chaotic Indian Street Videos
              </a>
              <p className="paper-authors">
                Pankaj Singh, and others
              </p>
              <p className="paper-conference">
                ICDAR-OST 2019
              </p>
            </div>

            <div className="paper">
              <a className="paper-title" target="_blank" href="https://www.cse.iitb.ac.in/~ganesh/papers/icdar2019a.pdf">
                Sub-word Embeddings for OCR Corrections in Highly Fusional Indic Languages

              </a>
              <p className="paper-authors">
                Rohit Saluja, and others
              </p>
              <p className="paper-conference">
                ICDAR 2019
              </p>
            </div>

            <div className="paper">
              <a className="paper-title" target="_blank" href="https://www.cse.iitb.ac.in/~ganesh/papers/wsc2018.pdf">
                Improving the learnability of classNameifiers for Sanskrit OCR corrections
              </a>
              <p className="paper-authors">
                Devaraja Adiga, and others
              </p>
              <p className="paper-conference">
                Proceedings of the 17th World Sanskrit Conference, Vancouver, 2018.
              </p>
            </div>

            <div className="paper">
              <a className="paper-title" target="_blank" href="https://www.cse.iitb.ac.in/~ganesh/papers/icdar17.pdf">
                Error Detection and Corrections in Indic OCR using LSTMs
              </a>
              <p className="paper-authors">
                Rohit Saluja, and others
              </p>
              <p className="paper-conference">
                ICDAR, 2017
              </p>
            </div>

            <div className="paper">
              <a className="paper-title" target="_blank" href="https://www.cse.iitb.ac.in/~ganesh/papers/icdar-ost17.pdf">
                A Framework for Document Specific Error Detection and Corrections in Indic OCR
              </a>
              <p className="paper-authors">
                Rohit Saluja, and others
              </p>
              <p className="paper-conference">
                ICDAR- OST, 2017
              </p>
            </div>

            <div className="paper-container">
              <div className="paper">
                <a className="paper-title" target="_blank" href="http://grpr.in/emm">
                  The English Medium Myth (2nd Edition)
                </a>
                <p className="paper-authors">
                  Sankrant Sanu   
                </p>
                <p className="paper-conference">
                  {/* <n Proceedings of The 35th AAAI Conference on Artificial Intelligence (AAAI 2021). */}
                </p>
              </div>		
            </div>
          </div>
        </div>
      </div>
    </div>

    // <div className="publications" id="Publications">
    //   <p className="publications_title">{t("publications_title")}</p>
    //   <Swiper
    //     loop={true}
    //     breakpoints={{
    //       700: { slidesPerView: 3, spaceBetween: 20 },
    //       250: { slidesPerView: 1 },
    //     }}
    //     navigation
    //     pagination={{ clickable: "true" }}
    //   >
    //     <SwiperSlide>
    //       <div className="publications_slider">
    //         <p className="publications_name">{t("publications_item1_name")}</p>
    //         <p className="publications_subtitle">
    //           {t("publications_item1_subtitle")}
    //         </p>
    //         <p className="publications_description">
    //           {t("publications_item1_description")}
    //         </p>
    //       </div>
    //     </SwiperSlide>
    //     <SwiperSlide>
    //       <div className="publications_slider">
    //         <p className="publications_name">{t("publications_item2_name")}</p>
    //         <p className="publications_subtitle">
    //           {t("publications_item2_subtitle")}
    //         </p>
    //         <p className="publications_description">
    //           {t("publications_item2_description")}
    //         </p>
    //       </div>
    //     </SwiperSlide>
    //     <SwiperSlide>
    //       <div className="publications_slider">
    //         <p className="publications_name">{t("publications_item3_name")}</p>
    //         <p className="publications_subtitle">
    //           {t("publications_item3_subtitle")}
    //         </p>
    //         <p className="publications_description">
    //           {t("publications_item3_description")}
    //         </p>
    //       </div>
    //     </SwiperSlide>
    //     <SwiperSlide>
    //       <div className="publications_slider">
    //         <p className="publications_name">{t("publications_item4_name")}</p>
    //         <p className="publications_subtitle">
    //           {t("publications_item4_subtitle")}
    //         </p>
    //         <p className="publications_description">
    //           {t("publications_item4_description")}
    //         </p>
    //       </div>
    //     </SwiperSlide>
    //     <SwiperSlide>
    //       <div className="publications_slider">
    //         <p className="publications_name">{t("publications_item5_name")}</p>
    //         <p className="publications_subtitle">
    //           {t("publications_item5_subtitle")}
    //         </p>
    //         <p className="publications_description">
    //           {t("publications_item5_description")}
    //         </p>
    //       </div>
    //     </SwiperSlide>
    //     <SwiperSlide>
    //       <div className="publications_slider">
    //         <p className="publications_name">{t("publications_item6_name")}</p>
    //         <p className="publications_subtitle">
    //           {t("publications_item6_subtitle")}
    //         </p>
    //         <p className="publications_description">
    //           {t("publications_item6_description")}
    //         </p>
    //       </div>
    //     </SwiperSlide>
    //     <SwiperSlide>
    //       <div className="publications_slider">
    //         <p className="publications_name">{t("publications_item7_name")}</p>
    //         <p className="publications_subtitle">
    //           {t("publications_item7_subtitle")}
    //         </p>
    //         <p className="publications_description">
    //           {t("publications_item7_description")}
    //         </p>
    //       </div>
    //     </SwiperSlide>
    //     <SwiperSlide>
    //       <div className="publications_slider">
    //         <p className="publications_name">{t("publications_item8_name")}</p>
    //         <p className="publications_subtitle">
    //           {t("publications_item8_subtitle")}
    //         </p>
    //         <p className="publications_description">
    //           {t("publications_item8_description")}
    //         </p>
    //       </div>
    //     </SwiperSlide>
    //     <SwiperSlide>
    //       <div className="publications_slider">
    //         <p className="publications_name">{t("publications_item9_name")}</p>
    //         <p className="publications_subtitle">
    //           {t("publications_item9_subtitle")}
    //         </p>
    //         <p className="publications_description">
    //           {t("publications_item9_description")}
    //         </p>
    //       </div>
    //     </SwiperSlide>
    //     <SwiperSlide>
    //       <div className="publications_slider">
    //         <p className="publications_name">{t("publications_item10_name")}</p>
    //         <p className="publications_subtitle">
    //           {t("publications_item10_subtitle")}
    //         </p>
    //         <p className="publications_description">
    //           {t("publications_item10_description")}
    //         </p>
    //       </div>
    //     </SwiperSlide>
    //     <SwiperSlide>
    //       <div className="publications_slider">
    //         <p className="publications_name">{t("publications_item11_name")}</p>
    //         <p className="publications_subtitle">
    //           {t("publications_item11_subtitle")}
    //         </p>
    //         <p className="publications_description">
    //           {t("publications_item11_description")}
    //         </p>
    //       </div>
    //     </SwiperSlide>
    //     <SwiperSlide>
    //       <div className="publications_slider">
    //         <p className="publications_name">{t("publications_item12_name")}</p>
    //         <p className="publications_subtitle">
    //           {t("publications_item12_subtitle")}
    //         </p>
    //         <p className="publications_description">
    //           {t("publications_item12_description")}
    //         </p>
    //       </div>
    //     </SwiperSlide>
    //     <SwiperSlide>
    //       <div className="publications_slider">
    //         <p className="publications_name">{t("publications_item13_name")}</p>
    //         <p className="publications_subtitle">
    //           {t("publications_item13_subtitle")}
    //         </p>
    //         <p className="publications_description">
    //           {t("publications_item13_description")}
    //         </p>
    //       </div>
    //     </SwiperSlide>
    //     <SwiperSlide>
    //       <div className="publications_slider">
    //         <p className="publications_name">{t("publications_item14_name")}</p>
    //         <p className="publications_subtitle">
    //           {t("publications_item14_subtitle")}
    //         </p>
    //         <p className="publications_description">
    //           {t("publications_item14_description")}
    //         </p>
    //       </div>
    //     </SwiperSlide>
    //     <SwiperSlide>
    //       <div className="publications_slider">
    //         <p className="publications_name">{t("publications_item15_name")}</p>
    //         <p className="publications_subtitle">
    //           {t("publications_item15_subtitle")}
    //         </p>
    //         <p className="publications_description">
    //           {t("publications_item15_description")}
    //         </p>
    //       </div>
    //     </SwiperSlide>
    //     <SwiperSlide>
    //       <div className="publications_slider">
    //         <p className="publications_name">{t("publications_item16_name")}</p>
    //         <p className="publications_subtitle">
    //           {t("publications_item16_subtitle")}
    //         </p>
    //         <p className="publications_description">
    //           {t("publications_item16_description")}
    //         </p>
    //       </div>
    //     </SwiperSlide>
    //   </Swiper>
    // </div>
  );
}

export default Publications;
