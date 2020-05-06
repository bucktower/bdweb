import styled from '@emotion/styled'
import { Link } from 'gatsby'

import { breakpoints } from '../../utils/styles'

export const Wrapper = styled.div`
  background: transparent;
  margin-bottom: 1.45rem;
  color: #FFF829;
`

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.45rem;
  margin: 0 auto;
  max-width: 960px;
`

export const HomeLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: bold;
  min-width: 50px;
  min-height: 50px;

  @media (max-width: ${breakpoints.s}px){
    font-size: 1.4rem
  }
`

export const CartLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: bold;
  margin-top: 14px;

  @media (max-width: ${breakpoints.s}px){
    font-size: 1.4rem
  }
`

export const CartCounter = styled.span`
  background-color: white;
  color: black;
  border-radius: 20px;
  padding: 0 10px;
  font-size: 0.5 rem;
  float: right;
  margin: -10px;
  z-index: 20;
`

    
     
        
          
            
              