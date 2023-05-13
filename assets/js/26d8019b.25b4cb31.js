"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[1395],{3628:function(e,t,o){o.r(t),o.d(t,{assets:function(){return c},contentTitle:function(){return d},default:function(){return g},frontMatter:function(){return l},metadata:function(){return h},toc:function(){return p}});var n=o(9375),i=o(8933),a=(o(1987),o(4127)),r=o(4093),s=o(2590),u=["components"],l={sidebar_position:2},d="Teach potential workers with Onboarding",h={unversionedId:"guides/how_to_use/worker_quality/using_onboarding",id:"guides/how_to_use/worker_quality/using_onboarding",title:"Teach potential workers with Onboarding",description:"The first step to getting quality data is describing your task properly and ensuring that workers have understood your instructions. To this end, Mephisto provides the OnboardingRequired Blueprint mixin.",source:"@site/docs/guides/how_to_use/worker_quality/using_onboarding.mdx",sourceDirName:"guides/how_to_use/worker_quality",slug:"/guides/how_to_use/worker_quality/using_onboarding",permalink:"/docs/guides/how_to_use/worker_quality/using_onboarding",draft:!1,editUrl:"https://github.com/facebookresearch/Mephisto/tree/main/docs/web/docs/guides/how_to_use/worker_quality/using_onboarding.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"guides",previous:{title:"Using qualifications to improve worker quality",permalink:"/docs/guides/how_to_use/worker_quality/common_qualification_flows"},next:{title:"Check worker quality with Screening Units",permalink:"/docs/guides/how_to_use/worker_quality/using_screen_units"}},c={},p=[{value:"Showcase",id:"showcase",level:2},{value:"Things to note in the showcase:",id:"things-to-note-in-the-showcase",level:3},{value:"Basic configuration",id:"basic-configuration",level:2},{value:"See the full code here",id:"see-the-full-code-here",level:3},{value:"See hydra configuration here",id:"see-hydra-configuration-here",level:3},{value:"Additional Questions?",id:"additional-questions",level:2}],k={toc:p};function g(e){var t=e.components,o=(0,i.Z)(e,u);return(0,a.kt)("wrapper",(0,n.Z)({},k,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"teach-potential-workers-with-onboarding"},"Teach potential workers with Onboarding"),(0,a.kt)("p",null,"The first step to getting quality data is describing your task properly and ensuring that workers have understood your instructions. To this end, Mephisto provides the ",(0,a.kt)("inlineCode",{parentName:"p"},"OnboardingRequired")," Blueprint mixin."),(0,a.kt)("p",null,"Onboarding is an opportunity to give workers complete context of your task the first time they work on it. You can also use it to provide workers with a simple test to ensure they read and understand task instructions."),(0,a.kt)("p",null,"Mephisto's onboarding disqualifies workers that fail the test, so it's good practice to ensure that the tests should be completable by anyone who reads through the instructions and also don't take up too much time."),(0,a.kt)("p",null,"If you're instead interested in filtering out workers who don't hit a specific quality bar, refer to ",(0,a.kt)("a",{parentName:"p",href:"../using_screen_units"},"using screening units"),", as Mephisto doesn't pay out for failed onboarding."),(0,a.kt)("h2",{id:"showcase"},"Showcase"),(0,a.kt)(r.Z,{playing:!0,controls:!0,width:"100%",height:"auto",url:"https://user-images.githubusercontent.com/55665282/183516125-c466fb96-f688-4903-90ea-d48b6cb5c46b.mp4",mdxType:"ReactPlayer"}),(0,a.kt)("h3",{id:"things-to-note-in-the-showcase"},"Things to note in the showcase:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"static_react_task")," example is ran with the ",(0,a.kt)("inlineCode",{parentName:"li"},"onboarding_example")," configuration enabled to ensure that onboarding page will be shown."),(0,a.kt)("li",{parentName:"ul"},'Worker "x" clicks the "Get Blocked" button and this doesn\'t allow the worker to progress'),(0,a.kt)("li",{parentName:"ul"},'Worker "y" clicks the "Move To Main Task" button and this allows the worker to go to the main task.')),(0,a.kt)("h2",{id:"basic-configuration"},"Basic configuration"),(0,a.kt)("p",null,"There are a few primary configuration parts for using onboarding units:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Hydra args",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"blueprint.onboarding_qualification"),": A string qualification to mark a worker's onboarding status. Workers without this qualification will be shown the onboarding, and Mephisto will either grant a positive or negative value for this qualification to all workers that complete onboarding. Setting this to ",(0,a.kt)("inlineCode",{parentName:"li"},"None")," disables onboarding."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"OnboardingSharedState"),":",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"onboarding_data"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"Dict[str, Any]")," of data you would like to populate the onboarding task's"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"validate_onboarding"),": A function that takes the data returned by your onboarding task's ",(0,a.kt)("inlineCode",{parentName:"li"},"handleSubmit")," and returns a bool for if the worker passed the onboarding.")))),(0,a.kt)("p",null,"A shortened version of the run script for the video above looks like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'def handle_onboarding(onboarding_data):\n    if onboarding_data["outputs"]["success"] == True:\n        return True\n    return False\n\n@task_script(default_config_file="example.yaml")\ndef main(operator: Operator, cfg: DictConfig) -> None:\n  ...\n  shared_state = SharedStaticTaskState(\n          static_task_data=[\n              {"text": "This text is good text!"},\n              {"text": "This text is bad text!"},\n          ],\n          validate_onboarding=handle_onboarding,\n      )\n  ...\n')),(0,a.kt)("h3",{id:"see-the-full-code-here"},"See the full code ",(0,a.kt)("a",{parentName:"h3",href:"https://github.com/facebookresearch/Mephisto/blob/main/examples/static_react_task/run_task.py"},"here")),(0,a.kt)("h3",{id:"see-hydra-configuration-here"},"See hydra configuration ",(0,a.kt)("a",{parentName:"h3",href:"https://github.com/facebookresearch/Mephisto/blob/main/examples/static_react_task/hydra_configs/conf/onboarding_example.yaml"},"here")),(0,a.kt)("p",null,"Unlike Screening and Gold units, Onboarding expects that you set up a custom frontend compared to your main task. You want to provide workers with an in-depth exploration of your task up-front (though you can always re-use onboarding components in your main task as reference materials)."),(0,a.kt)("p",null,"The handleSubmit method of ",(0,a.kt)("inlineCode",{parentName:"p"},"mephisto-task")," is used to send onboarding data from frontend to backend. For more info on how to build out onboarding frontends, check out our ",(0,a.kt)("a",{parentName:"p",href:"../../../tutorials/worker_controls"},"tutorial"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," We've observed that some workers may share out the answers for onboarding tasks, so we encourage that you make your validation questions configurable such that you can update them with a change to ",(0,a.kt)("inlineCode",{parentName:"p"},"onboarding_data"),"."),(0,a.kt)("h2",{id:"additional-questions"},"Additional Questions?"),(0,a.kt)("p",null,"You can find more information on using onboarding before your units in the reference documentation for ",(0,a.kt)(s.Z,{target:null,to:"pathname:///python_api/mephisto/abstractions/blueprints/mixins/onboarding_required.html",mdxType:"Link"},(0,a.kt)("inlineCode",{parentName:"p"},"OnboardingRequired")),"."))}g.isMDXComponent=!0}}]);