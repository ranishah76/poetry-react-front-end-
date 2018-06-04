const poems = [
  {
    id: 2,
    title: "Spring and Winter ii",
    lines: ["WHEN icicles hang by the wall,", " And Dick the shepherd blows his nail,", "And Tom bears logs into the hall,", " And milk comes frozen home in pail,", "When blood is nipp'd, and ways be foul,", "Then nightly sings the staring owl,", " To-whit!", "To-who!--a merry note,", "While greasy Joan doth keel the pot.", "", "When all aloud the wind doe blow,", " And coughing drowns the parson's saw,", "And birds sit brooding in the snow,", " And Marian's nose looks red and raw,", "When roasted crabs hiss in the bowl,", "Then nightly sings the staring owl,", " To-whit!", "To-who!--a merry note,", "While greasy Joan doth keel the pot."],
    linecount: 18
  },
  {
    id: 3,
    title: "Spring",
    lines: ["WHEN daisies pied and violets blue,", " And lady-smocks all silver-white,", "And cuckoo-buds of yellow hue", " Do paint the meadows with delight,", "The cuckoo then, on every tree,", "Mocks married men; for thus sings he,", " Cuckoo!", "Cuckoo, cuckoo!--O word of fear,", "Unpleasing to a married ear!", "", "When shepherds pipe on oaten straws,", " And merry larks are ploughmen's clocks,", "When turtles tread, and rooks, and daws,", " And maidens bleach their summer smocks", "The cuckoo then, on every tree,", "Mocks married men; for thus sings he,", " Cuckoo!", "Cuckoo, cuckoo!--O word of fear,", "Unpleasing to a married ear!"],
    linecount: 18
  },
  {
    id: 4,
    title: "Orpheus with his Lute Made Trees",
    lines: ["Orpheus with his lute made trees,", "And the mountain tops that freeze,", "Bow themselves, when he did sing:", "To his music plants and flowers", "Ever sprung; as sun and showers", "There had made a lasting spring.", "", "Everything that heard him play,", "Even the billows of the sea,", "Hung their heads, and then lay by.", "In sweet music is such art,", "Killing care and grief of heart", "Fall asleep, or hearing, die."],
    linecount: 12
  },
  {
    id: 5,
    title: "Under the Greenwood Tree",
    lines: ["Under the greenwood tree", "Who loves to lie with me,", "And turn his merry note", "Unto the sweet bird's throat,", "Come hither, come hither, come hither:", "Here shall he see", "No enemy", "But winter and rough weather.", "", "Who doth ambition shun,", "And loves to live i' the sun,", "Seeking the food he eats,", "And pleas'd with what he gets,", "Come hither, come hither, come hither:", "Here shall he see", "No enemy", "But winter and rough weather."],
    linecount: 16
  },
  {
    id: 6,
    title: "Winter",
    lines: ["When icicles hang by the wall", "And Dick the shepherd blows his nail", "And Tom bears logs into the hall,", "And milk comes frozen home in pail,", "When Blood is nipped and ways be foul,", "Then nightly sings the staring owl,", "Tu-who;", "Tu-whit, tu-who: a merry note,", "While greasy Joan doth keel the pot.", "", "When all aloud the wind doth blow,", "And coughing drowns the parson's saw,", "And birds sit brooding in the snow,", "And Marian's nose looks red and raw", "When roasted crabs hiss in the bowl,", "Then nightly sings the staring owl,", "Tu-who;", "Tu-whit, tu-who: a merry note,", "While greasy Joan doth keel the pot."],
    linecount: 18
  },
  {
    id: 7,
    title: "Sonnet 1: From fairest creatures we desire increase",
    lines: ["From fairest creatures we desire increase,", "That thereby beauty's rose might never die,", "But as the riper should by time decease,", "His tender heir might bear his memory:", "But thou contracted to thine own bright eyes,", "Feed'st thy light's flame with self-substantial fuel,", "Making a famine where abundance lies,", "Thy self thy foe, to thy sweet self too cruel:", "Thou that art now the world's fresh ornament,", "And only herald to the gaudy spring,", "Within thine own bud buriest thy content,", "And tender churl mak'st waste in niggarding:", " Pity the world, or else this glutton be,", " To eat the world's due, by the grave and thee."],
    linecount: 14
  },
  {
    id: 8,
    title: "Sonnet 2: When forty winters shall besiege thy brow",
    lines: ["When forty winters shall besiege thy brow,", "And dig deep trenches in thy beauty's field,", "Thy youth's proud livery so gazed on now,", "Will be a tatter'd weed of small worth held:", "Then being asked, where all thy beauty lies,", "Where all the treasure of thy lusty days;", "To say, within thine own deep sunken eyes,", "Were an all-eating shame, and thriftless praise.", "How much more praise deserv'd thy beauty's use,", "If thou couldst answer 'This fair child of mine", "Shall sum my count, and make my old excuse,'", "Proving his beauty by succession thine!", " This were to be new made when thou art old,", " And see thy blood warm when thou feel'st it cold."],
    linecount: 14
  },
  {
    id: 9,
    title: "Sonnet 3: Look in thy glass and tell the face thou viewest",
    lines: ["Look in thy glass and tell the face thou viewest", "Now is the time that face should form another;", "Whose fresh repair if now thou not renewest,", "Thou dost beguile the world, unbless some mother.", "For where is she so fair whose unear'd womb", "Disdains the tillage of thy husbandry?", "Or who is he so fond will be the tomb,", "Of his self-love to stop posterity?", "Thou art thy mother's glass and she in thee", "Calls back the lovely April of her prime;", "So thou through windows of thine age shalt see,", "Despite of wrinkles this thy golden time.", " But if thou live, remember'd not to be,", " Die single and thine image dies with thee."],
    linecount: 14
  },
  {
    id: 10,
    title: "Sonnet 4: Unthrifty loveliness, why dost thou spend",
    lines: ["Unthrifty loveliness, why dost thou spend", "Upon thy self thy beauty's legacy?", "Nature's bequest gives nothing, but doth lend,", "And being frank she lends to those are free:", "Then, beauteous niggard, why dost thou abuse", "The bounteous largess given thee to give?", "Profitless usurer, why dost thou use", "So great a sum of sums, yet canst not live?", "For having traffic with thy self alone,", "Thou of thy self thy sweet self dost deceive:", "Then how when nature calls thee to be gone,", "What acceptable audit canst thou leave?", " Thy unused beauty must be tombed with thee,", " Which, used, lives th' executor to be."],
    linecount: 14
  },
  {
    id: 11,
    title: "Sonnet 5: Those hours, that with gentle work did frame",
    lines: ["Those hours, that with gentle work did frame", "The lovely gaze where every eye doth dwell,", "Will play the tyrants to the very same", "And that unfair which fairly doth excel;", "For never-resting time leads summer on", "To hideous winter, and confounds him there;", "Sap checked with frost, and lusty leaves quite gone,", "Beauty o'er-snowed and bareness every where:", "Then were not summer's distillation left,", "A liquid prisoner pent in walls of glass,", "Beauty's effect with beauty were bereft,", "Nor it, nor no remembrance what it was:", " But flowers distill'd, though they with winter meet,", " Leese but their show; their substance still lives sweet."],
    linecount: 14
  },
  {
    id: 12,
    title: "Sonnet 6: Then let not winter's ragged hand deface",
    lines: ["Then let not winter's ragged hand deface,", "In thee thy summer, ere thou be distill'd:", "Make sweet some vial; treasure thou some place", "With beauty's treasure ere it be self-kill'd.", "That use is not forbidden usury,", "Which happies those that pay the willing loan;", "That's for thy self to breed another thee,", "Or ten times happier, be it ten for one;", "Ten times thy self were happier than thou art,", "If ten of thine ten times refigur'd thee:", "Then what could death do if thou shouldst depart,", "Leaving thee living in posterity?", " Be not self-will'd, for thou art much too fair", " To be death's conquest and make worms thine heir."],
    linecount: 14
  },
  {
    id: 13,
    title: "Sonnet 7: Lo! in the orient when the gracious light",
    lines: ["Lo! in the orient when the gracious light", "Lifts up his burning head, each under eye", "Doth homage to his new-appearing sight,", "Serving with looks his sacred majesty;", "And having climb'd the steep-up heavenly hill,", "Resembling strong youth in his middle age,", "Yet mortal looks adore his beauty still,", "Attending on his golden pilgrimage:", "But when from highmost pitch, with weary car,", "Like feeble age, he reeleth from the day,", "The eyes, 'fore duteous, now converted are", "From his low tract, and look another way:", " So thou, thyself outgoing in thy noon:", " Unlook'd, on diest unless thou get a son."],
    linecount: 14
  },
  {
    id: 14,
    title: "Sonnet 8: Music to hear, why hear'st thou music sadly?",
    lines: ["Music to hear, why hear'st thou music sadly?", "Sweets with sweets war not, joy delights in joy:", "Why lov'st thou that which thou receiv'st not gladly,", "Or else receiv'st with pleasure thine annoy?", "If the true concord of well-tuned sounds,", "By unions married, do offend thine ear,", "They do but sweetly chide thee, who confounds", "In singleness the parts that thou shouldst bear.", "Mark how one string, sweet husband to another,", "Strikes each in each by mutual ordering;", "Resembling sire and child and happy mother,", "Who, all in one, one pleasing note do sing:", " Whose speechless song being many, seeming one,", " Sings this to thee: 'Thou single wilt prove none.'"],
    linecount: 14
  },
  {
    id: 15,
    title: "Sonnet 9: Is it for fear to wet a widow's eye",
    lines: ["Is it for fear to wet a widow's eye,", "That thou consum'st thy self in single life?", "Ah! if thou issueless shalt hap to die,", "The world will wail thee like a makeless wife;", "The world will be thy widow and still weep", "That thou no form of thee hast left behind,", "When every private widow well may keep", "By children's eyes, her husband's shape in mind:", "Look! what an unthrift in the world doth spend", "Shifts but his place, for still the world enjoys it;", "But beauty's waste hath in the world an end,", "And kept unused the user so destroys it.", " No love toward others in that bosom sits", " That on himself such murd'rous shame commits."],
    linecount: 14
  }
]

export default poems
