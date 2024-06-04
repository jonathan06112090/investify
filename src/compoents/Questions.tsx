'use client';
import Image from 'next/image'
import MaxWidthWrapper from './MaxWidthWrapper'
import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0/client';


export default function Questions() {
  

  
  
  return (
    <>
    <div>
    age
    <input name='number'
    />
    </div>
    <fieldset>
    <br></br>
    <legend>Choose your risk profile</legend>
  
    <div>
      <input type="radio" id="huey" name="drone" value="huey"  />
      <label >Lave risk</label>
    </div>
  
    <div>
      <input type="radio" id="dewey" name="drone" value="dewey" />
      <label>Medium risk</label>
    </div>
  
    <div>
      <input type="radio" id="louie" name="drone" value="louie" />
      <label >Height risk</label>
    </div>
  </fieldset>

  <div>
    your time horizon 
  <input name='number'
    />
  </div>
  </>
  
  
  )
}
