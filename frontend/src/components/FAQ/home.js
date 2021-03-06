import React, {Fragment} from 'react';

export default function FAQ (props) {
  return (
    <Fragment>
      <div className="panel panel-default mtl">
      	<div className="panel-body">

		<div className="panel panel-default">
			<div className="panel-heading">What is $RISK?</div>
			<div className="panel-body">RISK is a platform that allows market participants to speculate and alleviate $RISK. <a href="https://www.risk.market/" target="_BLANK">Read more on risk.market</a></div>
		</div>

		<div className="panel panel-default">
			<div className="panel-heading">How does the game work?</div>
			<div className="panel-body">Once you deposit $RISK to your account you are ready to play. Simply select a game, enter your bet and click on Bet. A lucky number between 0 and 65535 will be generated and if it is less than the target number, you win. The amount of $RISK you win is the game multiplier times the bet amount. Lucky number generation is <a href="/verification">provably fair</a>.</div>
		</div>

		<div className="panel panel-default">
			<div className="panel-heading">What is the house edge?</div>
			<div className="panel-body">The house edge is 1%. We pay out 99% to players.</div>
		</div>

		<div className="panel panel-default">
			<div className="panel-heading">Is there a minimum withdrawal amount?</div>
			<div className="panel-body">The minimum withdrawal amount is 250,000,000 (250M) $RISK.</div>
		</div>

		<div className="panel panel-default">
			<div className="panel-heading">How is it provably fair?</div>
			<div className="panel-body">Lucky numbers are generated algorithmically based on your deposit transaction ID. <a href="/verification">Click here for more information.</a></div>
		</div>

		<div className="panel panel-default">
			<div className="panel-heading">I've lost my user ID / password. Can my account be recovered?</div>
			<div className="panel-body">Since we do not require an email address, password reset is not automated. Use the contact email at the bottom of the page. You will need to prove that you own one of the originating addresses of your first deposit.</div>
		</div>
	</div>
</div>

    </Fragment>
    )
}