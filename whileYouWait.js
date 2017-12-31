function birthdayCount(daysUntilMyBirthday){
  var answer = ""
  if(daysUntilMyBirthday > 30){
    answer = daysUntilMyBirthday + " days until my birthday." + " So sad i hate waiting"
  }
  if(daysUntilMyBirthday < 30){
    answer = daysUntilMyBirthday + " days until my birthday. Soooo close i can taste the exsessive amounts of Don Julio i shall consume"
  }
  if(daysUntilMyBirthday < 5){
    answer = daysUntilMyBirthday + " days until my birthday. I just bought a dump truck full of Don Julio" 
  }
  if(daysUntilMyBirthday < 2){
    answer = daysUntilMyBirthday + " single day until my birthday. I just bought a dump truck full of Don Julio" 
  }
  if(daysUntilMyBirthday === 0){
    "░H░A░P░P░Y░ B░I░R░T░H░D░A░Y░░♪ღ to me and the Don"
  }
  return answer;
}


birthdayCount(daysUntilMyBirthday);