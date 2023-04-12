import { StyledInfoText } from "../../styles/StyledInfoText";
import { StyledInfoArticle } from "../../styles/StyledInfoArticle";
import { StyledInfoImage } from "../../styles/StyledInfoImage";
import { StyledInfoList } from "../../styles/StyledInfoList";
import { StyledInstructionHeadline } from "../../styles/StyledInstructionHeadline";
import { StyledInfoHeadline } from "../../styles/StyledInfoHeadline";

export default function InfoSection() {
  return (
    <>
      <StyledInfoArticle>
        <StyledInfoHeadline>About the breathwork techniques</StyledInfoHeadline>
        <br></br>

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
            its benefits.
          </StyledInfoText>
          <StyledInstructionHeadline>Instruction</StyledInstructionHeadline>
          <StyledInfoList>
            <li>
              Relax and sit or lie down in a quiet environment. Never practise
              these techniques in a dangerous environment such as deep or cold
              water.
            </li>
            <li>Push the button to start the counter.</li>
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
        <StyledInfoImage src="/images/icebath.jpg" alt="ice bath" />
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
        </section>
        <StyledInfoImage src="/images/breathing.jpg" alt="ice bath" />
      </StyledInfoArticle>
    </>
  );
}
