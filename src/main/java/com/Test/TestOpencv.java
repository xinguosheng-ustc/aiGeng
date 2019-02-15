package com.Test;

import org.opencv.core.Core;
import org.opencv.core.Mat;
import org.opencv.core.Point;
import org.opencv.core.Scalar;
import org.opencv.imgcodecs.Imgcodecs;
import org.opencv.imgproc.Imgproc;

public class TestOpencv {
    public static void main(String args[]){
        System.loadLibrary(Core.NATIVE_LIBRARY_NAME);
        Mat mat1 = Imgcodecs.imread("D:/123.jpg");
        Scalar scalar = new Scalar(255,0,0);
        Point p1 = new Point(0,0);
        Point p2 = new Point(400,400);
        Imgproc.rectangle(mat1,p1,p2,scalar,10);
        Imgcodecs.imwrite("D://qwe.jpg",mat1);
    }
}
