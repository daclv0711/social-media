import styled from 'styled-components';
import { Flex, FlexAll, FlexDir } from 'utils/FlexStyles';

export const Wrapper = styled(FlexAll)`
    margin-top: 0.4rem;
    margin-bottom: 1.6rem;
    width: 100%;
    height: 11rem;
    position: relative;
    overflow: hidden;
`;

export const StoriesWrapper = styled.div`
    gap: 0.4rem;
    width: 100%;
    height: 100%;
`

export const Slide = styled(Flex)`
    gap: 0.4rem;
    justify-content: space-between;
    position: absolute;
    right: 0;
    width: 100%;
    height: 100%;
    transition: all 0.3s linear;
`;

export const StoryUser = styled(FlexDir)`
    position: relative;
    border-radius: 8px;
    width: 7rem;
    height: 100%;
    cursor: pointer;
    font-weight: 600;
    box-shadow: 0 1px 2px var(--shadow-2);
    img {
        height: 100%;
        width: 100%;
        border-radius: 8px 8px 0 0;
    }
    .story-user-info {
        box-shadow: 0 1px 2px var(--shadow-1);
        background-color: var(--white);
        border-radius: 0 0 8px 8px;
        padding-top: 1.2rem;
        padding-bottom: 0.8rem;
        text-align: center;
        font-size: 0.8rem;
    }
    :hover {
        img {
            transition: all 0.3s;
            transform: scale(1.1);
        }
    }
`;

export const Image = styled.div`
    border-radius: 8px 8px 0 0;
    height: 100%;
    overflow: hidden;
    width: 100%;
    position: relative;
`;

export const AddStory = styled(FlexAll)`
    background-color: var(--white);
    color: var(--blue);
    font-size: 30px;
    font-weight: bold; 
    padding: 0.3rem;
    border-radius: 50%;
    position: absolute;
    bottom: 1.9rem;
    left: 50%;
    transform: translateX(-50%);
    cursor: pointer;
`;

export const Story = styled.div`
    position: relative;
    width: 7rem;
    overflow: hidden;
    border-radius: 8px;
    box-shadow: 0 1px 2px var(--shadow-1);
    cursor: pointer;
    height: 100%;
    .img-story {
        border-radius: 8px;
        width: 100%;
        height: 100%;
    }

    :hover, :active {
        .img-story {
            transition: all 0.3s;
            transform: scale(1.1);
            border-radius: 8px;
        }
    }
`
export const StoryInfo = styled.div`
    color: var(--white);
    font-weight: 600;
    position: absolute;
    bottom: 4px;
    left: 10px;
`;

export const StoryImgUser = styled.div`
    position: absolute;
    width: 2.5rem;
    height: 2.5rem;
    top: 1rem;
    left: 0.8rem;
    img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        border: 4px solid var(--blue);
    }
`;
