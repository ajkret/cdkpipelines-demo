#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { CdkpipelinesDemoPipelineStack } from '../lib/pipelines-demo-pipeline-stack';

const stackProps = {
    // Dev Note: this removes an annoyying buggy message regarding Bootstraping the environment
    synthesizer: new cdk.DefaultStackSynthesizer({
        generateBootstrapVersionRule: false,
    })
};

const app = new cdk.App();
new CdkpipelinesDemoPipelineStack(app, 'CdkpipelinesDemoPipelineStack', stackProps);
