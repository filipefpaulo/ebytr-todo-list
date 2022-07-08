import styled from 'styled-components';
import { ContainerCenter } from './base/ContainerCenter';

const HeroTitleContainer = styled(ContainerCenter)`
  font-size: 40px;
`;

export function HeroTitle() {
  return <HeroTitleContainer>Ebytr</HeroTitleContainer>;
}
