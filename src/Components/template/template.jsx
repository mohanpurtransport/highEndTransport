import { Fragment } from "react";
import ContactForm from "../contact-form/contact-form";
import {TemplateImageContainer,
        TitleAndParaContainer,
        ContactAndTextContainer,
        Contents,
        ContactTextHeading,
        ContentsTextContainer,
        TitleImageAndParaContainer,
        AdditionalImageContainer
        } from "./template.styles"

const Template = ({data}) => {
    return(
        <Fragment>

        <TemplateImageContainer>
            <img src={data.imgSrc} alt="truck in sunset" />
        </TemplateImageContainer>

        {
            data.moreImg ? (
                <TitleImageAndParaContainer>
                    <AdditionalImageContainer>
                        <img src={data.moreImgSrc} alt={data.altMoreImgSrc} />
                    </AdditionalImageContainer>
                    <div>
                        <ContactTextHeading>{data.title}</ContactTextHeading>
                        <div>
                            <p dangerouslySetInnerHTML={{__html: data.paraNextToTitle}}/>
                        </div>
                    </div>
                </TitleImageAndParaContainer>
            ) : (
                <TitleAndParaContainer>
                    <div>
                        <h1> {data.title} </h1>
                    </div>
                    <div>
                        <p dangerouslySetInnerHTML={{__html: data.paraNextToTitle}}/>
                    </div>
                </TitleAndParaContainer>
            )
        }

        <ContactAndTextContainer>
            <Contents>
                <ContactForm />
                <ContentsTextContainer>
                    <ContactTextHeading>{data.titleNextToContact}</ContactTextHeading>
                    <p dangerouslySetInnerHTML={{__html: data.paraNextToContact}}/>
                </ContentsTextContainer>

            </Contents>
            
        </ContactAndTextContainer>

        </Fragment>
    )
}

export default Template;
