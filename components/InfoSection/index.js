import { StyledInfoText } from "../../styles/StyledInfoText";
import { StyledInfoArticle } from "../../styles/StyledInfoArticle";
import { StyledInfoImage } from "../../styles/StyledInfoImage";
import { StyledInfoList } from "../../styles/StyledInfoList";
import { StyledInstructionHeadline } from "../../styles/StyledInstructionHeadline";
import { StyledInfoHeadline } from "../../styles/StyledInfoHeadline";
import AboutMeSection from "../AboutMeSection";

export default function InfoSection() {
  return (
    <>
      <StyledInfoArticle>
        <section>
          <StyledInfoHeadline>What is focused breathing?</StyledInfoHeadline>
          <StyledInfoText>
            The purpose of this technique, inspired by the dutch
            &apos;Iceman&apos;, Wim Hof, is to increase oxygen intake and
            alkalize the blood, while the breath retention is said to help
            reduce inflammation and strengthen the immune system. The method is
            based on the idea that breathing exercises can help the body adapt
            to extreme conditions, such as cold exposure.It is important to note
            that this technique should be practiced with caution and under the
            guidance of a qualified instructor, as breath retention can be
            dangerous for some individuals, particularly those with certain
            medical conditions. The practice is often combined with cold showers
            or ice baths, meditation, and physical exercise to further enhance
            its benefits. Disclaimer: This app is by no means officially related
            to Wim Hof, his teachings or his methods. It is a personal fan
            project.
          </StyledInfoText>
          <StyledInstructionHeadline>Instruction</StyledInstructionHeadline>
          <StyledInfoList>
            <li>
              Relax and sit or lie down in a quiet environment. Never practise
              these techniques in a dangerous environment such as deep or cold
              water.
            </li>
            <li>
              Select wheter to practise focused or power breathing and push the
              button to start the counter.
            </li>
            <li>
              Inhale and exhale profoundly either through your mouth or nose,
              following the pace of the displayed counter and the audio guide.
              Each pace represents one full inhale and exhale.
            </li>
            <li>
              When the counter reaches 40, exhale completely without pushing and
              hold your breath for as long as you can.
            </li>
            <li>
              When you feel the urge to breathe again, push the button to stop
              the stopwatch and inhale deeply.
            </li>
            <li>
              Hold your breath again, now with your lungs full of air, for
              another 15 seconds and then exhale completely.
            </li>
            <li>
              The next round starts immidiately after the exhale. Repeat the
              cycle 3 times.
            </li>
            <li>
              You can find the tracked duration of your breath retention on the
              tracking page afterwards.
            </li>
            <li>
              If you decide to take a cold shower or ice bath after the
              exercise, you can add the duration manually on the tracking page.
            </li>
          </StyledInfoList>
        </section>
        <section>
          <StyledInfoHeadline>What is power breathing?</StyledInfoHeadline>
          <StyledInfoText>
            Proponents of the method claim that it can improve immune function,
            reduce stress, increase energy levels, and enhance mental clarity.
            It can be used for a powerful start into the day or when catching a
            cold. The instructions just remain the same, but the pace of the 40
            counts is much faster which can cause a bit more dizzyiness and
            lightheadedness.
          </StyledInfoText>
        </section>
        <StyledInfoImage src="/images/breathing.jpg" alt="breathing" />
        <section>
          <StyledInfoHeadline>What is 4-7-8 breathing?</StyledInfoHeadline>
          <StyledInfoText>
            The 4-7-8 breathing technique is a simple, yet effective relaxation
            exercise. It is believed to help reduce stress and anxiety by
            slowing down the heart rate and promoting relaxation. It can be
            practiced at any time of day, but it&apos;s especially useful before
            bed to promote better sleep.
          </StyledInfoText>
          <StyledInfoList>
            <StyledInstructionHeadline>Instruction</StyledInstructionHeadline>
            <li>
              Sit up straight and place the tip of your tongue against the roof
              of your mouth, behind your front teeth.
            </li>
            <li>Push the button to start the cycle.</li>
            <li>
              Exhale completely through your mouth, making a whooshing sound.
            </li>
            <li>
              Close your mouth and inhale through your nose for a count of 4.
            </li>
            <li>Hold your breath for a count of 7.</li>
            <li>
              Exhale completely through your mouth, making a whooshing sound,
              for a count of 8.
            </li>
            <li>
              This completes one breath. The next round starts immidiately.
              Repeat the cycle for a total of up to four breaths, stopping it by
              pushing the button.
            </li>
          </StyledInfoList>
          <StyledInfoHeadline>What is ice bathing?</StyledInfoHeadline>
          <StyledInfoText>
            Practioners of ice bathing claim the following benefits:
            <ol>
              <li>
                Improved immune function: Exposure to cold temperatures can
                stimulate the production of white blood cells, which can help
                the body fight off infections and diseases.
              </li>
              <li>
                Increased energy and alertness: Cold showers can stimulate the
                release of adrenaline and other hormones, which can increase
                energy and mental clarity.{" "}
              </li>
              <li>
                Reduced inflammation: Cold exposure has been shown to reduce
                inflammation in the body, which can help alleviate symptoms of
                chronic pain and other inflammatory conditions.
              </li>
              <li>
                Improved circulation: Cold water immersion can increase blood
                flow and circulation, which can help reduce muscle soreness and
                improve overall health.{" "}
              </li>
              <li>
                Enhanced mood and resilience: Cold exposure has been shown to
                improve mood and increase resilience to stress, anxiety, and
                depression.
              </li>
            </ol>
          </StyledInfoText>
          <StyledInfoList>
            <StyledInstructionHeadline>Instruction</StyledInstructionHeadline>
            <li>
              As with any form of therapy or exercise, it&apos;s important to
              consult with a healthcare professional before trying cold
              exposure, especially if you have any underlying health conditions.
            </li>
            <li>Set the preparation countdown before the actual start of the cold 
              exposure by pressing the hourglass buttons. The default is 10 seconds 
              before the counter starts.</li>
            <li>Push the button to start the counter.</li>
            <li>
              A countdown of 10 seconds will start to give you enough time to
              immerse yourself in cold water. When it reaches 0, the stopwatch
              will start.
            </li>
            <li>
              You can use a shower, a bath or a bucket of ice water. If you have
              never tried a cold shower before, start with a warm shower and
              then turn the water to cold for the last 30 seconds. If you are
              using a bath, fill it with cold water and sit in it for 90 seconds
              up to 5 minutes.
            </li>
            <li>
              Do not push yourself to the point of discomfort. If you feel dizzy
              or nauseous, get out of the water immediately.
            </li>
            <li>
              After the cold exposure, push the button to stop the stopwatch and
              add the duration to the tracking page.
            </li>
            <li>Well done! You can now enjoy a cup of tea ^^</li>
          </StyledInfoList>
        </section>
        <StyledInfoImage src="/images/icebath.jpg" alt="ice bath" />
        <AboutMeSection />
      </StyledInfoArticle>
    </>
  );
}
