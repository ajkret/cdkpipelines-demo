import * as cdk from 'aws-cdk-lib';
import { Template, Match } from 'aws-cdk-lib/assertions';
import * as Pipelines from '../lib/pipelines-demo-pipeline-stack'

describe('CDK Synt tests', () => {

  test('CodePipeline Stack Tests', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new Pipelines.CdkpipelinesDemoPipelineStack(app, 'MyTestStack');
    // THEN

    const template = Template.fromStack(stack);

    template.hasResourceProperties('AWS::CodePipeline::Pipeline', {
      Name: 'DemoCdkServicePipeline'
    });

    template.hasResourceProperties('AWS::CodePipeline::Pipeline', Match.objectLike({
      Stages: Match.arrayWith([
        Match.objectLike({
          Name: 'Source',
          Actions: Match.arrayWith([Match.objectLike({
            ActionTypeId: Match.objectLike({
              Owner: 'ThirdParty',
              Provider: 'GitHub'
            })
          })])
        })
      ])
    }));
  });
});