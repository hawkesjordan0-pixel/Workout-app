import React, { useState, useEffect } from 'react';
import { RefreshCw, Check, Clock, Target, Calendar, Heart, Dumbbell, RotateCw, Trophy, HelpCircle, X } from 'lucide-react';

const StretchApp = () => {
  const [currentDay, setCurrentDay] = useState(0);
  const [activeSection, setActiveSection] = useState('stretches');
  const [completedStretches, setCompletedStretches] = useState([]);
  const [completedCardio, setCompletedCardio] = useState([]);
  const [showCheckmark, setShowCheckmark] = useState({});
  const [currentWeek, setCurrentWeek] = useState(1);
  const [showCelebration, setShowCelebration] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  const exerciseLibrary = {
    lowerBodyStretches: [
      { name: "Hip Flexor Stretch", duration: "45 seconds each side", description: "Kneel on one knee, push hips forward gently while keeping back straight.", benefit: "Counteracts tight hips from sitting and improves posture" },
      { name: "90/90 Hip Stretch", duration: "60 seconds each side", description: "Sit with front leg at 90 degrees, back leg at 90 degrees behind you. Lean forward over front leg gently.", benefit: "Essential for hip mobility and rotation" },
      { name: "Standing Hamstring Stretch", duration: "45 seconds each leg", description: "Place heel on low surface, keep leg straight, lean forward from hips.", benefit: "Reduces lower back strain and improves flexibility" },
      { name: "Figure-4 Glute Stretch", duration: "60 seconds each side", description: "Lying down, cross ankle over opposite knee, pull thigh toward chest.", benefit: "Relieves lower back tension and improves hip mobility" },
      { name: "Pigeon Pose", duration: "90 seconds each side", description: "Front leg bent at 90 degrees, back leg extended, lean forward over front leg.", benefit: "Deep hip opener for improved flexibility" },
      { name: "Butterfly Stretch", duration: "90 seconds", description: "Sit with soles of feet together, gently press knees toward floor.", benefit: "Opens inner hips and groin" },
      { name: "Couch Stretch", duration: "60 seconds each side", description: "Back shin against wall, front foot forward in lunge position.", benefit: "Intense hip flexor stretch" },
      { name: "Frog Stretch", duration: "90 seconds", description: "On hands and knees, spread knees wide, sit back toward heels.", benefit: "Inner hip and groin flexibility" },
      { name: "Adductor Rock-Back", duration: "45 seconds each side", description: "Wide stance, shift weight side to side while bending knee. Keep other leg straight.", benefit: "Dynamic inner thigh flexibility and hip control" },
      { name: "Split-Stance Hip Flexor", duration: "60 seconds each side", description: "Long lunge stance, posterior pelvic tilt, gentle lean forward. Add arm raise for balance.", benefit: "Deep hip flexor release with core engagement" },
      { name: "Active Hamstring Stretch", duration: "30 seconds each leg", description: "Lie on back, raise one leg straight up, actively point and flex foot. Use strap if needed.", benefit: "Combines flexibility with muscle activation" },
      { name: "Wall-Assisted Hip Flexor", duration: "45 seconds each side", description: "Face wall in lunge position, back knee down. Use wall for balance, tuck pelvis.", benefit: "Safe, controlled hip flexor release" }
    ],
    upperBodyStretches: [
      { name: "Doorway Chest Stretch", duration: "60 seconds each side", description: "Place forearm on doorframe at shoulder height, step through doorway. Vary arm height.", benefit: "Opens chest rounded from desk work, improves posture" },
      { name: "Cross-Body Shoulder Stretch", duration: "45 seconds each side", description: "Pull arm across chest with opposite hand, keep shoulders down.", benefit: "Increases shoulder flexibility and range of motion" },
      { name: "Neck Side Stretch", duration: "30 seconds each side", description: "Tilt head toward shoulder, use hand for gentle pressure. Keep shoulders relaxed.", benefit: "Relieves computer neck tension" },
      { name: "Thread the Needle", duration: "45 seconds each side", description: "On hands and knees, reach arm under body and across. Rest on shoulder.", benefit: "Improves thoracic rotation and flexibility" },
      { name: "Triceps Stretch", duration: "45 seconds each side", description: "Reach arm overhead, bend elbow, use other hand to gently pull elbow.", benefit: "Shoulder and arm flexibility" },
      { name: "Eagle Arms", duration: "45 seconds each side", description: "Wrap arms around each other, lift elbows, feel stretch between shoulder blades.", benefit: "Upper back and shoulder mobility" },
      { name: "Lat Stretch", duration: "45 seconds each side", description: "Reach arm overhead, lean to opposite side, feel stretch along side body.", benefit: "Improves shoulder mobility and side bend" },
      { name: "Sleeper Stretch", duration: "45 seconds each side", description: "Lie on side, arm at 90 degrees, use other hand to rotate palm toward floor.", benefit: "Improves internal shoulder rotation" },
      { name: "Wall Slides", duration: "45 seconds", description: "Back against wall, slide arms up and down while maintaining contact. Keep core engaged.", benefit: "Improves shoulder blade mechanics and posture" },
      { name: "Shoulder Capsule Stretch", duration: "30 seconds each position", description: "Use a light band at various angles to stretch shoulder capsule. Keep movements controlled.", benefit: "Comprehensive shoulder mobility" },
      { name: "Wall Angel", duration: "45 seconds", description: "Back against wall, arms in 'goal post' position, slide up and down maintaining contact.", benefit: "Shoulder mobility with postural awareness" },
      { name: "Band Pull-Apart Stretch", duration: "30 seconds", description: "Hold resistance band in front, pull apart while squeezing shoulder blades. Keep arms straight.", benefit: "Improves shoulder blade control and posture" }
    ],
    spineStretches: [
      { name: "Seated Spinal Twist", duration: "60 seconds each side", description: "Sit with legs extended, cross one leg over, twist toward bent knee.", benefit: "Improves spinal mobility and relieves desk stiffness" },
      { name: "Cat-Cow Stretch", duration: "10 slow repetitions", description: "On hands and knees, alternate arching and rounding back with breath.", benefit: "Mobilizes entire spine, relieves back tension" },
      { name: "Child Pose with Lateral Reach", duration: "45 seconds each side", description: "In child pose, walk hands to one side to stretch opposite side body.", benefit: "Lengthens side muscles for better rotation" },
      { name: "Supine Twist", duration: "60 seconds each side", description: "Lie on back, drop knees to one side, extend arms out, look opposite direction.", benefit: "Gentle spinal rotation and recovery" },
      { name: "Cobra Stretch", duration: "45 seconds", description: "Lie face down, press upper body up with hands, hips stay on floor.", benefit: "Extends spine, counteracts slouching" },
      { name: "Thoracic Extension", duration: "10 repetitions", description: "On foam roller or rolled towel, extend back over it at mid-back level.", benefit: "Opens up rounded upper back" },
      { name: "Scorpion Stretch", duration: "10 reps each side", description: "Lie face down, reach leg across body toward opposite side.", benefit: "Dynamic spinal rotation" },
      { name: "Book Openers", duration: "10 reps each side", description: "Lie on side, knees bent, open top arm like opening a book.", benefit: "Thoracic rotation mobility" },
      { name: "Segmental Bridge", duration: "45 seconds", description: "Lie on back, lift spine one vertebra at a time, lower in reverse. Focus on control.", benefit: "Improves spinal articulation and control" },
      { name: "Open Book with Breath", duration: "30 seconds each side", description: "Side-lying rotation with coordinated breathing. Exhale into rotation.", benefit: "Links breath with spinal mobility" },
      { name: "Wall Angel Slides", duration: "45 seconds", description: "Back against wall, slide arms up while maintaining spinal contact. Progress to adding thoracic extension.", benefit: "Improves thoracic mobility with control" },
      { name: "Quadruped Thoracic Rotation", duration: "30 seconds each side", description: "On hands and knees, place hand behind head, rotate thoracic spine while keeping lumbar stable.", benefit: "Targeted thoracic mobility" }
    ],
    dynamicStretches: [
      { name: "World Greatest Stretch", duration: "5 reps each side", description: "Lunge forward, drop elbow to instep, rotate up reaching to sky. Hold each position 3 seconds.", benefit: "Combines hip, spine, and shoulder mobility" },
      { name: "Torso Rotation with Arms Extended", duration: "15 slow rotations each way", description: "Stand with arms extended forward, rotate torso slowly side to side.", benefit: "Improves rotational mobility and coordination" },
      { name: "Walking Lunges with Twist", duration: "10 steps each leg", description: "Lunge forward, twist torso toward front leg, hands at chest.", benefit: "Dynamic hip and spine mobility" },
      { name: "Arm Circles", duration: "10 forward, 10 backward", description: "Large controlled circles with straight arms, gradually increase range.", benefit: "Warms up shoulders and improves range of motion" },
      { name: "Leg Swings", duration: "10 each direction per leg", description: "Hold support, swing leg forward and back and side to side.", benefit: "Dynamic hip mobility" },
      { name: "Inchworms", duration: "10 repetitions", description: "Bend at waist, walk hands out to plank, walk feet to hands.", benefit: "Full body dynamic stretch" },
      { name: "Spiderman Lunges", duration: "10 each side", description: "Plank position, step foot outside of hand, hold and reach up.", benefit: "Hip mobility and rotation" },
      { name: "Shoulder Dislocates", duration: "15 repetitions", description: "Hold band or towel wide, bring overhead and behind back.", benefit: "Shoulder flexibility and range" },
      { name: "Multi-Planar Lunge", duration: "6 reps each direction", description: "Forward lunge, side lunge, rotational lunge. Flow between positions smoothly.", benefit: "Develops mobility in all movement planes" },
      { name: "Bear Crawl to Down Dog", duration: "8 repetitions", description: "Flow from bear position to downward dog. Add knee drives in bear.", benefit: "Dynamic core control and shoulder mobility" },
      { name: "Lateral Squat Walk", duration: "20 steps total", description: "Wide stance, shift side to side with deep knee bend. Keep chest up.", benefit: "Adductor mobility and lateral movement control" },
      { name: "Thoracic Bridge Flow", duration: "6-8 reps", description: "Bridge position, thread arm under body and reach to ceiling alternating sides.", benefit: "Dynamic spinal rotation with stability" }
    ],
    recoveryStretches: [
      { name: "Upper Trap Stretch", duration: "45 seconds each side", description: "Sit or stand, tilt head diagonally forward, gentle pressure with hand.", benefit: "Releases common desk worker tension point" },
      { name: "Wrist and Forearm Stretches", duration: "30 seconds each position", description: "Extend arm, pull fingers back, then pull down. Both hands.", benefit: "Prevents computer-related wrist strain" },
      { name: "Reclined Pigeon Pose", duration: "90 seconds each side", description: "Lie on back, cross ankle over opposite knee, pull legs toward chest.", benefit: "Deep hip stretch for golf mobility" },
      { name: "Legs Up the Wall", duration: "3-5 minutes", description: "Lie with legs straight up against wall, arms relaxed, breathe deeply.", benefit: "Recovery pose, reduces leg fatigue" },
      { name: "Happy Baby", duration: "90 seconds", description: "Lie on back, grab feet or shins, gently pull knees toward armpits.", benefit: "Hip and lower back release" },
      { name: "Corpse Pose", duration: "5 minutes", description: "Lie flat, arms and legs relaxed, focus on deep breathing.", benefit: "Full body relaxation and recovery" },
      { name: "Shoulder Rolls", duration: "20 rolls each direction", description: "Slow, controlled shoulder circles focusing on full range.", benefit: "Releases shoulder tension" },
      { name: "Ankle Circles", duration: "15 each direction per foot", description: "Rotate ankles slowly through full range of motion.", benefit: "Ankle mobility and recovery" },
      { name: "Progressive Muscle Relaxation", duration: "10 minutes", description: "Systematically tense and relax each muscle group. Start from feet and move up.", benefit: "Deep muscle recovery and mental relaxation" },
      { name: "Breathing Bridge", duration: "60 seconds", description: "Gentle bridge pose with focus on deep belly breathing. Rise on inhale, lower on exhale.", benefit: "Combines breath work with gentle movement" },
      { name: "90/90 Breathing", duration: "3 minutes", description: "Lie with legs elevated on chair at 90 degrees. Focus on diaphragmatic breathing.", benefit: "Promotes parasympathetic recovery" },
      { name: "Lateral Rest Position", duration: "2 minutes each side", description: "Side-lying with bottom leg straight, top leg bent. Focus on relaxed breathing.", benefit: "Gentle spinal decompression and recovery" }
    ],
    lowerBodyCardio: [
      { name: "Kettlebell Swings", duration: "45 seconds work, 15 seconds rest x 4 sets", description: "Hip hinge movement, swing kettlebell to shoulder height. Keep back straight, power from hips.", benefit: "Builds hip power for golf drive, excellent cardio stimulus" },
      { name: "Goblet Squats", duration: "40 seconds work, 20 seconds rest x 4 sets", description: "Hold kettlebell at chest, squat deep keeping chest up, drive through heels.", benefit: "Strengthens legs and core for stable golf stance" },
      { name: "Alternating Lunges with Dumbbells", duration: "45 seconds work, 15 seconds rest x 3 sets", description: "Hold dumbbells at sides, step forward into lunge, alternate legs continuously.", benefit: "Builds lower body endurance and balance" },
      { name: "Kettlebell Deadlifts", duration: "40 seconds work, 20 seconds rest x 3 sets", description: "Hinge at hips, lower kettlebell to floor, stand up squeezing glutes.", benefit: "Strengthens posterior chain for posture and power" },
      { name: "Jump Squats", duration: "40 seconds work, 20 seconds rest x 4 sets", description: "Bodyweight squat, explode up jumping, land softly.", benefit: "Explosive leg power" },
      { name: "Step-Ups with Dumbbells", duration: "45 seconds each leg, 15 seconds rest x 3 sets", description: "Step onto bench with dumbbells, drive through heel.", benefit: "Unilateral leg strength and balance" },
      { name: "Kettlebell Single-Leg Deadlifts", duration: "40 seconds each leg, 20 seconds rest x 3 sets", description: "Balance on one leg, hinge forward with kettlebell.", benefit: "Balance and posterior chain strength" },
      { name: "Bulgarian Split Squats", duration: "40 seconds each leg, 20 seconds rest x 3 sets", description: "Back foot elevated, front leg squats, optional dumbbells.", benefit: "Intense single-leg strength builder" },
      { name: "Tempo Goblet Squats", duration: "40 seconds work, 20 seconds rest x 3 sets", description: "3 seconds down, pause, 1 second up. Focus on control and form.", benefit: "Builds strength and control through full range" },
      { name: "Lateral Band Walks", duration: "30 seconds each direction x 3 sets", description: "Mini-band above knees, side steps maintaining tension. Keep feet straight.", benefit: "Activates hip stabilizers and improves lateral strength" },
      { name: "Split Stance RDLs", duration: "40 seconds each side x 3 sets", description: "Back foot elevated on toe, hinge forward with weights. Keep back flat.", benefit: "Single-leg stability with posterior chain focus" },
      { name: "Banded Monster Walks", duration: "30 seconds forward, 30 back x 3", description: "Mini-band above knees, walk forward/back with knees tracked. Stay low.", benefit: "Hip activation and stability training" }
    ],
    upperBodyCardio: [
      { name: "Dumbbell Thrusters", duration: "40 seconds work, 20 seconds rest x 4 sets", description: "Dumbbells at shoulders, squat down, stand and press overhead in one motion.", benefit: "Full body movement keeps heart rate elevated" },
      { name: "Renegade Rows", duration: "45 seconds work, 15 seconds rest x 3 sets", description: "Plank position on dumbbells, row one dumbbell up while stabilizing, alternate sides.", benefit: "Core stability and back strength for posture" },
      { name: "Dumbbell Push Press", duration: "40 seconds work, 20 seconds rest x 4 sets", description: "Dumbbells at shoulders, slight dip, drive up pressing dumbbells overhead.", benefit: "Builds shoulder strength and power" },
      { name: "Kettlebell High Pulls", duration: "45 seconds work, 15 seconds rest x 3 sets", description: "Pull kettlebell from floor to chest height, elbows high, explosive hip drive.", benefit: "Develops upper back and shoulder endurance" },
      { name: "Push-Ups", duration: "40 seconds work, 20 seconds rest x 4 sets", description: "Standard or modified push-ups, maintain plank position.", benefit: "Chest, shoulders, and core strength" },
      { name: "Dumbbell Bent-Over Rows", duration: "45 seconds work, 15 seconds rest x 4 sets", description: "Hinge forward, pull dumbbells to ribs, squeeze shoulder blades.", benefit: "Back strength and posture" },
      { name: "Overhead Press", duration: "40 seconds work, 20 seconds rest x 4 sets", description: "Press dumbbells or kettlebell overhead, core tight.", benefit: "Shoulder and core strength" },
      { name: "Dumbbell Chest Press", duration: "45 seconds work, 15 seconds rest x 3 sets", description: "Lying on bench or floor, press dumbbells up and together.", benefit: "Chest and shoulder strength" },
      { name: "Band Pull-Aparts", duration: "30 seconds work, 15 seconds rest x 4 sets", description: "Hold band at shoulder height, pull apart with straight arms. Control return.", benefit: "Upper back endurance and posture" },
      { name: "Hand Release Push-Ups", duration: "40 seconds work, 20 seconds rest x 3 sets", description: "Push-up with chest to floor, lift hands at bottom. Explosive press up.", benefit: "Enhanced chest activation and power" },
      { name: "Lateral Raise Complex", duration: "30 seconds work, 15 seconds rest x 3 sets", description: "Alternating front and lateral raises. Keep slight bend in elbows.", benefit: "Shoulder endurance and stability" },
      { name: "YTWLs", duration: "40 seconds work, 20 seconds rest x 3 sets", description: "Prone on incline bench, perform Y, T, W, L arm positions. Focus on control.", benefit: "Comprehensive shoulder stability work" }
    ],
    coreCardio: [
      { name: "Kettlebell Russian Twists", duration: "45 seconds work, 15 seconds rest x 4 sets", description: "Seated, lean back slightly, rotate kettlebell side to side touching floor.", benefit: "Builds rotational power for golf swing" },
      { name: "Mountain Climbers", duration: "40 seconds work, 20 seconds rest x 4 sets", description: "Plank position, drive knees to chest alternating quickly, keep hips level.", benefit: "Core stability and cardiovascular endurance" },
      { name: "Dumbbell Woodchoppers", duration: "45 seconds each side, 15 seconds rest x 3 sets", description: "Hold dumbbell, rotate from high to low across body like chopping wood.", benefit: "Direct golf swing movement pattern training" },
      { name: "Plank with Shoulder Taps", duration: "45 seconds work, 15 seconds rest x 3 sets", description: "Hold plank, tap opposite shoulder with hand, minimize rotation.", benefit: "Core anti-rotation strength" },
      { name: "Bicycle Crunches", duration: "45 seconds work, 15 seconds rest x 4 sets", description: "Alternate bringing elbow to opposite knee, extend other leg.", benefit: "Oblique and core endurance" },
      { name: "Dead Bugs", duration: "45 seconds work, 15 seconds rest x 3 sets", description: "On back, opposite arm and leg extend while keeping back flat.", benefit: "Core stability and coordination" },
      { name: "Pallof Press", duration: "40 seconds each side, 20 seconds rest x 3 sets", description: "Hold band or weight, press out resisting rotation.", benefit: "Anti-rotation core strength" },
      { name: "Bird Dogs", duration: "45 seconds work, 15 seconds rest x 3 sets", description: "On hands and knees, extend opposite arm and leg.", benefit: "Core stability and balance" },
      { name: "Plank Complex", duration: "45 seconds work, 15 seconds rest x 3 sets", description: "Flow between forearm plank, high plank, and side planks. Maintain alignment.", benefit: "Full core engagement and stability" },
      { name: "Standing Band Rotation", duration: "30 seconds each side x 3 sets", description: "Cable/band at chest height, rotate torso maintaining stable hips. Control return.", benefit: "Rotational power with control" },
      { name: "Bear Crawl Holds", duration: "40 seconds work, 20 seconds rest x 3 sets", description: "Hold bear position, lift one hand and opposite foot slightly. Alternate.", benefit: "Deep core stability and coordination" },
      { name: "Copenhagen Plank", duration: "30 seconds each side x 3 sets", description: "Side plank with top leg supported on bench. Add bottom leg lifts.", benefit: "Lateral core and hip strength" }
    ],
    fullBodyCardio: [
      { name: "Kettlebell Clean and Press", duration: "40 seconds each side, 20 seconds rest x 3 sets", description: "Clean kettlebell to shoulder, press overhead, lower and repeat.", benefit: "Full body power development" },
      { name: "Dumbbell Burpees", duration: "45 seconds work, 15 seconds rest x 4 sets", description: "Hold dumbbells, burpee down, jump up, optional press overhead at top.", benefit: "Maximum cardiovascular challenge" },
      { name: "Alternating Dumbbell Snatch", duration: "45 seconds work, 15 seconds rest x 3 sets", description: "Swing dumbbell from floor to overhead in one motion, alternate arms.", benefit: "Explosive power and endurance" },
      { name: "Jump Squats with Light Dumbbells", duration: "40 seconds work, 20 seconds rest x 3 sets", description: "Hold light dumbbells, squat and jump explosively, land softly.", benefit: "Leg power and cardiovascular fitness" },
      { name: "Man Makers", duration: "45 seconds work, 15 seconds rest x 3 sets", description: "Burpee with dumbbells, add row at bottom, press at top.", benefit: "Ultimate full body exercise" },
      { name: "Kettlebell Turkish Get-Ups", duration: "5 reps each side, rest as needed x 2 sets", description: "From lying, stand up while holding kettlebell overhead.", benefit: "Full body strength and stability" },
      { name: "Devil Press", duration: "40 seconds work, 20 seconds rest x 3 sets", description: "Burpee with dumbbells, swing both to overhead at top.", benefit: "Intense full body cardio" },
      { name: "Thruster to Row Complex", duration: "40 seconds work, 20 seconds rest x 3 sets", description: "Dumbbell thruster followed by bent over row. Flow between movements.", benefit: "Full body strength and conditioning" },
      { name: "Kettlebell Flow", duration: "45 seconds work, 15 seconds rest x 3 sets", description: "Clean to rack, squat, press, snatch. Flow smoothly between movements.", benefit: "Movement skill and cardiovascular fitness" },
      { name: "Dumbbell Box Complex", duration: "40 seconds work, 20 seconds rest x 3 sets", description: "Step up, shoulder press, reverse lunge, row. Alternate sides.", benefit: "Multi-movement conditioning" },
      { name: "Walking Push-Pull", duration: "45 seconds work, 15 seconds rest x 3 sets", description: "Walking lunges with alternating push press and row. Control pace.", benefit: "Total body coordination and endurance" },
      { name: "Racked Carry Complex", duration: "30 seconds work, 15 seconds rest x 4 sets", description: "Kettlebell racked carry with shoulder switching. Add squats between switches.", benefit: "Loaded movement skill development" },
      { name: "Dumbbell Complexes", duration: "45 seconds work, 15 seconds rest x 3 sets", description: "Sequence: deadlift, row, clean, press, squat without putting weight down.", benefit: "Metabolic conditioning" }
    ],
    activeRecovery: [
      { name: "Light Kettlebell Swings", duration: "30 seconds work, 30 seconds rest x 3 sets", description: "Lighter weight, focus on form and rhythm, keep heart rate moderate.", benefit: "Active recovery while maintaining movement" },
      { name: "Dumbbell Walking", duration: "2 minutes continuous", description: "Carry moderate dumbbells at sides, walk with good posture.", benefit: "Grip strength and light cardio" },
      { name: "Bodyweight Squats", duration: "30 seconds work, 30 seconds rest x 3 sets", description: "Slow controlled squats, focus on depth and form.", benefit: "Movement without fatigue" },
      { name: "Arm Swings and Rotations", duration: "3 minutes continuous", description: "Various arm movements, circles, swings, crosses, keep moving gently.", benefit: "Upper body blood flow and mobility" },
      { name: "Shadow Boxing", duration: "2 minutes easy pace", description: "Light punches and movement, stay relaxed.", benefit: "Light cardio and coordination" },
      { name: "Kettlebell Halos", duration: "30 seconds each direction x 3 sets", description: "Circle kettlebell around head, smooth controlled motion.", benefit: "Shoulder mobility and light work" },
      { name: "Yoga Flow", duration: "5 minutes", description: "Sun salutations or easy flow sequence.", benefit: "Full body movement and flexibility" },
      { name: "Light Rowing", duration: "3 minutes easy pace", description: "If available, easy rowing machine or resistance band rows.", benefit: "Upper body and cardio recovery" },
      { name: "Moving Joint Mobility", duration: "5-10 minutes", description: "Gentle movement through all major joints, from ankles to neck. Keep it flowing.", benefit: "Maintains mobility while promoting recovery" },
      { name: "Band Pull-Apart Series", duration: "2 minutes total", description: "Very light resistance band work focusing on shoulder mobility. Mix heights and angles.", benefit: "Upper body tissue recovery" },
      { name: "Walking Meditation", duration: "10 minutes", description: "Slow, mindful walking focusing on breath and posture. Can be done indoors or out.", benefit: "Mental and physical recovery" },
      { name: "Mobility Flow", duration: "5 minutes", description: "Gentle flowing movements combining stretches. Focus on smooth transitions.", benefit: "Active flexibility maintenance" }
    ]
  };

  const getRandomSelection = (array, count, seededRandom) => {
    const shuffled = [...array].sort(() => 0.5 - seededRandom());
    return shuffled.slice(0, count);
  };

  const generateWeeklyProgram = (weekNumber) => {
    let seed = weekNumber;
    const seededRandom = () => {
      const x = Math.sin(seed++) * 10000;
      return x - Math.floor(x);
    };

    return [
      {
        day: "Monday - Lower Body Focus",
        stretchFocus: "Hip mobility and desk relief",
        cardioFocus: "Lower body kettlebell endurance",
        stretches: getRandomSelection(exerciseLibrary.lowerBodyStretches, 4, seededRandom),
        cardio: getRandomSelection(exerciseLibrary.lowerBodyCardio, 4, seededRandom)
      },
      {
        day: "Tuesday - Upper Body & Shoulders",
        stretchFocus: "Shoulder mobility and posture correction",
        cardioFocus: "Upper body strength endurance",
        stretches: getRandomSelection(exerciseLibrary.upperBodyStretches, 4, seededRandom),
        cardio: getRandomSelection(exerciseLibrary.upperBodyCardio, 4, seededRandom)
      },
      {
        day: "Wednesday - Spine & Core",
        stretchFocus: "Rotational mobility and spinal health",
        cardioFocus: "Core endurance and rotation",
        stretches: getRandomSelection(exerciseLibrary.spineStretches, 4, seededRandom),
        cardio: getRandomSelection(exerciseLibrary.coreCardio, 4, seededRandom)
      },
      {
        day: "Thursday - Dynamic Mobility",
        stretchFocus: "Dynamic movement patterns",
        cardioFocus: "Full body conditioning",
        stretches: getRandomSelection(exerciseLibrary.dynamicStretches, 4, seededRandom),
        cardio: getRandomSelection(exerciseLibrary.fullBodyCardio, 4, seededRandom)
      },
      {
        day: "Friday - Recovery & Flexibility",
        stretchFocus: "Gentle stretches and tension release",
        cardioFocus: "Active recovery circuit",
        stretches: getRandomSelection(exerciseLibrary.recoveryStretches, 4, seededRandom),
        cardio: getRandomSelection(exerciseLibrary.activeRecovery, 4, seededRandom)
      },
      {
        day: "Weekend - Active Choice",
        stretchFocus: "Personalized routine and practice",
        cardioFocus: "Fun activity day",
        stretches: [
          { name: "Your Top 3 Favorite Stretches", duration: "2 minutes each", description: "Choose any 3 stretches from the week that felt best or target your tight areas.", benefit: "Personalized flexibility maintenance" },
          { name: "Movement Practice", duration: "15-20 minutes", description: "Practice fluid movements focusing on your improved range of motion. Start slow.", benefit: "Integrate flexibility gains into daily movement" },
          { name: "Foam Rolling Optional", duration: "10 minutes", description: "Roll IT bands, glutes, upper back, and lats slowly.", benefit: "Enhances flexibility and recovery" },
          { name: "Leisure Walk", duration: "20-30 minutes", description: "Easy walk with good posture, relaxed breathing.", benefit: "Active recovery and mental reset" }
        ],
        cardio: [
          { name: "Disc Golf", duration: "1-2 hours", description: "Play a round of disc golf, walking the course and practicing throws.", benefit: "Combines walking, skill practice, and upper body movement" },
          { name: "Light Kettlebell Complex", duration: "20 minutes easy pace", description: "Cycle through: 5 swings, 5 goblet squats, 5 presses, rest. Repeat leisurely.", benefit: "Maintain conditioning without intensity" },
          { name: "Yard Work or Active Hobby", duration: "30-60 minutes", description: "Gardening, washing car, playing with kids or pets, etc.", benefit: "Stay active while doing enjoyable activities" },
          { name: "Nature Walk", duration: "30-45 minutes", description: "Relaxing walk in nature, focusing on recovery and enjoyment.", benefit: "Active recovery and mental reset" }
        ]
      }
    ];
  };

  const [dailyPrograms, setDailyPrograms] = useState(() => generateWeeklyProgram(1));

  useEffect(() => {
    const today = new Date().getDay();
    const adjustedDay = today === 0 ? 5 : today - 1;
    setCurrentDay(adjustedDay);
    
    const startDate = new Date('2025-01-01');
    const currentDate = new Date();
    const daysDiff = Math.floor((currentDate - startDate) / (1000 * 60 * 60 * 24));
    const weekNumber = Math.floor(daysDiff / 42) + 1;
    setCurrentWeek(weekNumber);
    setDailyPrograms(generateWeeklyProgram(weekNumber));
  }, []);

  const refreshProgram = () => {
    const newWeek = currentWeek + 1;
    setCurrentWeek(newWeek);
    setDailyPrograms(generateWeeklyProgram(newWeek));
    setCompletedStretches([]);
    setCompletedCardio([]);
  };

  const resetCycle = () => {
    setCurrentWeek(1);
    setDailyPrograms(generateWeeklyProgram(1));
    setCompletedStretches([]);
    setCompletedCardio([]);
  };

  const toggleComplete = (index, type) => {
    if (type === 'stretch') {
      setCompletedStretches(prev => {
        if (prev.includes(index)) {
          return prev.filter(i => i !== index);
        } else {
          return [...prev, index];
        }
      });
    } else {
      setCompletedCardio(prev => {
        if (prev.includes(index)) {
          return prev.filter(i => i !== index);
        } else {
          return [...prev, index];
        }
      });
    }
    
    const key = `${type}-${index}`;
    setShowCheckmark(prev => ({...prev, [key]: true}));
    setTimeout(() => {
      setShowCheckmark(prev => ({...prev, [key]: false}));
    }, 1000);

    // Check if all exercises are completed
    const updatedStretches = type === 'stretches' ? [...completedStretches, index] : completedStretches;
    const updatedCardio = type === 'cardio' ? [...completedCardio, index] : completedCardio;
    
    if (
      updatedStretches.length === currentProgram.stretches.length &&
      updatedCardio.length === currentProgram.cardio.length
    ) {
      setShowCelebration(true);
      setTimeout(() => {
        setShowCelebration(false);
      }, 3000);
    }
  };

  const currentProgram = dailyPrograms[currentDay];
  const stretchProgress = (completedStretches.length / currentProgram.stretches.length) * 100;
  const cardioProgress = (completedCardio.length / currentProgram.cardio.length) * 100;

  const activities = activeSection === 'stretches' ? currentProgram.stretches : currentProgram.cardio;
  const completed = activeSection === 'stretches' ? completedStretches : completedCardio;
  const progress = activeSection === 'stretches' ? stretchProgress : cardioProgress;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 p-4 md:p-8">
      {showCelebration && (
        <div className="celebration">
          <div className="flex flex-col items-center justify-center bg-green-100 rounded-xl p-8 shadow-lg">
            <Trophy className="w-16 h-16 text-yellow-500 mb-4" />
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Congratulations!</h2>
            <p className="text-gray-600">You've completed all exercises for today!</p>
          </div>
        </div>
      )}
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="flex items-center justify-between px-4 mb-2">
            <div className="flex items-center gap-3">
              <Target className="w-10 h-10 text-blue-600" />
              <h1 className="text-4xl font-bold text-gray-800">Daily Fitness Routine</h1>
            </div>
            <button 
              onClick={() => setShowInfo(true)}
              className="p-2 rounded-full hover:bg-blue-50 transition-colors"
              aria-label="Show app information"
            >
              <HelpCircle className="w-6 h-6 text-blue-600" />
            </button>
          </div>
          <p className="text-gray-600 text-lg">Flexibility + Cardio Strength for Better Health</p>
          <div className="mt-2 flex items-center justify-center gap-2 text-sm text-gray-500">
            <RotateCw className="w-4 h-4" />
            <span>Cycle {currentWeek} - New exercises every 6 weeks</span>
          </div>
          
          {showInfo && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
              <div className="bg-white rounded-xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-xl relative">
                <button 
                  onClick={() => setShowInfo(false)}
                  className="absolute right-4 top-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
                  aria-label="Close information"
                >
                  <X className="w-6 h-6 text-gray-500" />
                </button>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">How to Use This App</h2>
                <div className="space-y-4 text-gray-600">
                  <section>
                    <h3 className="font-bold text-lg mb-2">Daily Program</h3>
                    <p>Each day features a specialized focus with stretches and cardio exercises. The app automatically shows today's program, but you can access any day's workout.</p>
                  </section>
                  <section>
                    <h3 className="font-bold text-lg mb-2">Tracking Progress</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Click exercises to mark them as complete</li>
                      <li>Progress bars show your daily completion</li>
                      <li>A celebration appears when you complete all exercises</li>
                    </ul>
                  </section>
                  <section>
                    <h3 className="font-bold text-lg mb-2">Weekly Cycles</h3>
                    <p>The program changes every 6 weeks to keep your routine fresh and challenging. Use the refresh button to start a new cycle, or reset to begin from week 1.</p>
                  </section>
                  <section>
                    <h3 className="font-bold text-lg mb-2">Exercise Details</h3>
                    <p>Each exercise includes:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Detailed instructions</li>
                      <li>Duration recommendations</li>
                      <li>Benefits and focus areas</li>
                    </ul>
                  </section>
                  <section>
                    <h3 className="font-bold text-lg mb-2">Tips</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Always warm up before starting exercises</li>
                      <li>Follow the recommended durations</li>
                      <li>Listen to your body and modify as needed</li>
                      <li>Stay consistent with your routine</li>
                    </ul>
                  </section>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <div className="flex items-center justify-center gap-2 mb-4 text-gray-600">
            <Calendar className="w-5 h-5" />
            <span className="font-medium">Select Your Day</span>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2 mb-6">
            {dailyPrograms.map((program, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentDay(index);
                  setCompletedStretches([]);
                  setCompletedCardio([]);
                }}
                className={`px-3 py-2 rounded-lg font-medium transition-all text-sm ${
                  currentDay === index
                    ? 'bg-blue-600 text-white shadow-md scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {program.day.split(' - ')[0]}
              </button>
            ))}
          </div>
          
          <div className="text-center border-t pt-4 mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">{currentProgram.day}</h2>
            
            <div className="flex gap-3 justify-center">
              <button
                onClick={() => setActiveSection('stretches')}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                  activeSection === 'stretches'
                    ? 'bg-green-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Target className="w-5 h-5" />
                Stretches
              </button>
              <button
                onClick={() => setActiveSection('cardio')}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                  activeSection === 'cardio'
                    ? 'bg-orange-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Heart className="w-5 h-5" />
                Cardio
              </button>
            </div>
          </div>

          <p className={`text-center font-medium flex items-center justify-center gap-2 mb-4 ${
            activeSection === 'stretches' ? 'text-green-700' : 'text-orange-700'
          }`}>
            {activeSection === 'stretches' ? <Target className="w-4 h-4" /> : <Dumbbell className="w-4 h-4" />}
            {activeSection === 'stretches' ? currentProgram.stretchFocus : currentProgram.cardioFocus}
          </p>

          <div className="mt-4">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span className="font-medium">
                {activeSection === 'stretches' ? 'Stretch' : 'Cardio'} Progress
              </span>
              <span className="font-semibold">{completed.length} / {activities.length}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden shadow-inner">
              <div 
                className={`h-full transition-all duration-500 rounded-full flex items-center justify-end pr-2 ${
                  activeSection === 'stretches' 
                    ? 'bg-gradient-to-r from-green-500 to-green-600' 
                    : 'bg-gradient-to-r from-orange-500 to-red-600'
                }`}
                style={{ width: `${progress}%` }}
              >
                {progress === 100 && (
                  <Check className="w-8 h-8 text-white animate-bounce" />
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {activities.map((activity, index) => {
            const isCompleted = completed.includes(index);
            const key = `${activeSection === 'stretches' ? 'stretch' : 'cardio'}-${index}`;
            const showCheck = showCheckmark[key];
            
            return (
              <div
                key={index}
                className={`bg-white rounded-xl shadow-md hover:shadow-lg transition-all ${
                  isCompleted 
                    ? activeSection === 'stretches' 
                      ? 'ring-2 ring-green-500 shadow-green-100' 
                      : 'ring-2 ring-orange-500 shadow-orange-100'
                    : ''
                }`}
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        {index + 1}. {activity.name}
                      </h3>
                      <div className={`flex items-center gap-2 font-semibold px-3 py-1 rounded-lg inline-flex ${
                        activeSection === 'stretches'
                          ? 'text-green-600 bg-green-50'
                          : 'text-orange-600 bg-orange-50'
                      }`}>
                        <Clock className="w-4 h-4" />
                        <span>{activity.duration}</span>
                      </div>
                    </div>
                    <button
                      onClick={() => toggleComplete(index, activeSection === 'stretches' ? 'stretch' : 'cardio')}
                      className={`flex items-center justify-center w-14 h-14 rounded-full transition-all shadow-md hover:shadow-lg ${
                        isCompleted
                          ? activeSection === 'stretches'
                            ? 'bg-green-600 text-white hover:bg-green-700'
                            : 'bg-orange-600 text-white hover:bg-orange-700'
                          : 'bg-gray-100 text-gray-400 hover:bg-gray-200'
                      }`}
                    >
                      {showCheck ? (
                        <Check className="w-7 h-7 animate-pulse" />
                      ) : (
                        <Check className={`w-7 h-7 ${isCompleted ? '' : 'opacity-40'}`} />
                      )}
                    </button>
                  </div>
                  
                  <div className="space-y-3">
                    <p className="text-gray-700 leading-relaxed">
                      <span className="font-semibold text-gray-800">How to:</span> {activity.description}
                    </p>
                    
                    <div className={`rounded-lg p-4 border-l-4 ${
                      activeSection === 'stretches'
                        ? 'bg-gradient-to-r from-blue-50 to-green-50 border-green-500'
                        : 'bg-gradient-to-r from-orange-50 to-red-50 border-orange-500'
                    }`}>
                      <p className="text-sm font-medium text-gray-700">
                        <span className={`font-bold ${
                          activeSection === 'stretches' ? 'text-green-700' : 'text-orange-700'
                        }`}>
                          💪 Why:
                        </span> {activity.benefit}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <button
            onClick={() => {
              if (activeSection === 'stretches') {
                setCompletedStretches([]);
              } else {
                setCompletedCardio([]);
              }
            }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg font-medium transition-colors shadow hover:shadow-md"
          >
            <RefreshCw className="w-5 h-5" />
            Reset {activeSection === 'stretches' ? 'Stretches' : 'Cardio'}
          </button>
          <button
            onClick={() => {
              setCompletedStretches([]);
              setCompletedCardio([]);
            }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-red-100 hover:bg-red-200 text-red-700 rounded-lg font-medium transition-colors shadow hover:shadow-md"
          >
            <RefreshCw className="w-5 h-5" />
            Reset All
          </button>
          <button
            onClick={refreshProgram}
            className="inline-flex items-center gap-2 px-6 py-3 bg-purple-100 hover:bg-purple-200 text-purple-700 rounded-lg font-medium transition-colors shadow hover:shadow-md"
          >
            <RotateCw className="w-5 h-5" />
            New 6-Week Cycle
          </button>
          <button
            onClick={resetCycle}
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-lg font-medium transition-colors shadow hover:shadow-md"
          >
            <RotateCw className="w-5 h-5" />
            Reset to Cycle 1
          </button>
        </div>

        <div className={`mt-8 rounded-xl shadow-xl p-6 text-white ${
          activeSection === 'stretches'
            ? 'bg-gradient-to-r from-green-600 to-blue-600'
            : 'bg-gradient-to-r from-orange-500 to-red-600'
        }`}>
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span>💡</span> {activeSection === 'stretches' ? 'Stretching' : 'Cardio Training'} Tips
          </h3>
          {activeSection === 'stretches' ? (
            <ul className="space-y-2 text-sm leading-relaxed">
              <li>• <strong>Never force it:</strong> Stretch should feel good, never painful</li>
              <li>• <strong>Breathe deeply:</strong> Exhale as you deepen into each stretch</li>
              <li>• <strong>Warm up first:</strong> Best after light activity or at end of workday</li>
              <li>• <strong>Stay consistent:</strong> Daily practice beats occasional intensity</li>
              <li>• <strong>Hold steady:</strong> Avoid bouncing, use smooth controlled movements</li>
            </ul>
          ) : (
            <ul className="space-y-2 text-sm leading-relaxed">
              <li>• <strong>Target 130 BPM:</strong> Moderate intensity - you should be able to talk but feel challenged</li>
              <li>• <strong>Start light:</strong> Choose weights that allow you to complete all sets with good form</li>
              <li>• <strong>Rest as needed:</strong> Take extra rest if heart rate goes too high</li>
              <li>• <strong>Form over speed:</strong> Controlled movements prevent injury and build strength</li>
              <li>• <strong>Stay hydrated:</strong> Keep water nearby and sip between sets</li>
              <li>• <strong>Do stretches first:</strong> Warm, flexible muscles perform better and prevent injury</li>
            </ul>
          )}
        </div>

        <div className="mt-6 bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
            <RotateCw className="w-5 h-5 text-purple-600" />
            About Your Program Rotation
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed mb-2">
            Your exercises automatically rotate every 6 weeks from a library of 100+ activities. Each week you get fresh combinations while maintaining focus on your goals: improved flexibility, strength, and overall wellness.
          </p>
          <p className="text-gray-600 text-sm">
            <strong>Current cycle:</strong> Week {currentWeek} - Click "New 6-Week Cycle" above to manually refresh your exercises anytime.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StretchApp;
